<?php
namespace config\autoload;

//WRITTEN 14/09/06 REVISED  02/12/07 REVISED 18/11/14
class Db
{
	private $host = '37.148.204.116';
	private $port;
	private $username = 'SonnyFraikue';
	private $password = 'BHY65tgvft6yjko0!';
	private $dbname = 'SonnyFraikue';
	private $dblink;// connection
	private $dbresult;// query result
	private $suppress = false;// query result
	private $debug = false;// debug value 

public function __construct($debug = false) {
	$this->connect();
	if ($debug) {
		echo $this->host . " " . $this->port . " " . $this->username . " " . $this->password . "\n";
	}
}

// connect to db
private function connect() {
	if (!is_resource($this->dblink)) {
		$this->dblink = @mysql_connect($this->host . ":" . $this->port, $this->username, $this->password);
	}

	if ($this->dbname) {
		@mysql_select_db($this->dbname, $this->dblink);
	}
}

// check connection
private function checkConnect() {
	if (!$this->dblink) {
		return false;
	} else {
		return true;
	}
}

private function close() {
	if (is_resource($this->dblink)) {
		mysql_close($this->dblink);
	}
}

// query
public function query($sql) {
	if ($this->debug && $_SERVER['REMOTE_ADDR'] == $this->host) {
		echo $sql . '<br />';
	}
	if (!$this->checkConnect()) {
		if (!$this->suppress) {
			echo "Could not connect to MySQL<br />";
		}
		return false;
	}
	$this->dbresult = mysql_query($sql, $this->dblink);
	if ($this->dbresult) {
		return true;
	} else {
		if (!$this->suppress) {
			echo "MySQL error in query: " . $sql . "<br />";
			echo "MySQL says: " . mysql_errno($this->dblink) . " " . mysql_error($this->dblink) . "<br />";
		}
		return false;
	}
}

// number of rows
public function numRows() {
	return mysql_num_rows($this->dbresult);
}

// get array
public function getArray() {
	$row = @mysql_fetch_assoc($this->dbresult);
	if ($row) {
		return $row;
	} else {
		return false;
	}
}

// get array
public function getFullArray() {
	$i = 0;
	while ($arr[$i++] = mysql_fetch_assoc($this->dbresult));
	array_pop($arr);
	if ($arr) {
		return $arr;
	} else {
		return false;
	}
}

// escape a string
public function escapeString($string) {
	return mysql_real_escape_string($string);
}
public function escStr($string) {
	return mysql_real_escape_string($string);
}
// get insert id
public function getInsID() {
	return mysql_insert_id($this->dblink);
}
public function getAffRows() {
	return mysql_affected_rows($this->dblink);
}
}
