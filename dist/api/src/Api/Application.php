<?php

namespace Api;

use Api\Model\Features;
use Api\Model\Products;
use Api\Model\Templates;
use \Slim\Slim;
use \Exception;
use \config\autoload;
require_once 'config/autoload/database.local.php';

// TODO Move all "features" things to a class with index() and get() methods
class Application extends Slim
{
    public $configDirectory;
    public $config;

    protected function initConfig()
    {
        $config = array();
        if (!file_exists($this->configDirectory) || !is_dir($this->configDirectory)) {
            throw new Exception('Config directory is missing: ' . $this->configDirectory, 500);
        }
        foreach (preg_grep('/\\.php$/', scandir($this->configDirectory)) as $filename) {
            $config = array_replace_recursive($config, include $this->configDirectory . '/' . $filename);
        }
        return $config;
    }

    public function __construct(array $userSettings = array(), $configDirectory = 'config')
    {
        // Slim initialization
        parent::__construct($userSettings);
        $this->config('debug', false);
        $this->notFound(function () {
            $this->handleNotFound();
        });
        $this->error(function ($e) {
            $this->handleException($e);
        });
        // Config
        $this->configDirectory = __DIR__ . '/../../' . $configDirectory;
        $this->config = $this->initConfig();
        $urlPrefix =   preg_match('/localhost/', $this->config['configuration']['thehost'],$matches)?$this->config['configuration']['local']['endpointprefix']:$this->config['configuration']['live']['endpointprefix'];
        // products
         $this->get($urlPrefix.'products', function () {
            $products = new Products();
            $mydb = new autoload\Db();
            $this->response->headers->set('Content-Type', 'application/json');
            $this->response->setBody(json_encode($products->getProducts($mydb)));
        });
         // templates
          $this->get($urlPrefix.'templates', function () {
            $templates = new Templates();
            $mydb = new autoload\Db();
            $this->response->headers->set('Content-Type', 'application/json');
            $this->response->setBody(json_encode($templates->getTemplates($mydb)));
        });

    }

    public function handleNotFound()
    {
        throw new Exception(
            'Resource ' . $this->request->getResourceUri() . ' using '
            . $this->request->getMethod() . ' method does not exist.',
            404
        );
    }

    public function handleException(Exception $e)
    {
        $status = $e->getCode();
        $statusText = \Slim\Http\Response::getMessageForCode($status);
        if ($statusText === null) {
            $status = 500;
            $statusText = 'Internal Server Error';
        }

        $this->response->setStatus($status);
        $this->response->headers->set('Content-Type', 'application/json');
        $this->response->setBody(json_encode(array(
            'status' => $status,
            'statusText' => preg_replace('/^[0-9]+ (.*)$/', '$1', $statusText),
            'description' => $e->getMessage(),
        )));
    }

    /**
     * @return \Slim\Http\Response
     */
    public function invoke()
    {
        foreach ($this->middleware as $middleware) {
            $middleware->call();
        }
        $this->response()->finalize();
        return $this->response();
    }
}
