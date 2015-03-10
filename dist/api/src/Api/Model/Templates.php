<?php

namespace Api\Model;

class Templates
{
    protected $id;


    public function getTemplates($mydb)
    {
    	$query	=	"SELECT * FROM `templates`;";
    	if ($mydb->query($query)&&$mydb->numRows()) {
    		$array	=	$mydb->getFullArray();
    	}else{
    		$array 	=	'no data';
    	}
        return $array;
    }
}
