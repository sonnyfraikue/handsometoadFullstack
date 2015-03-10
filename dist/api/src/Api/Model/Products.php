<?php

namespace Api\Model;

class Products
{
    protected $id;


    public function getProducts($mydb)
    {
    	$query	=	"SELECT * FROM `products`;";
    	if ($mydb->query($query)&&$mydb->numRows()) {
    		$array	=	$mydb->getFullArray();
    	}else{
    		$array 	=	'no data';
    	}
        return $array;
    }
}
