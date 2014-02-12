<?php
include "../includes/functions.php";
$dev = true;
?>
<!DOCTYPE HTML>
<html>
<head>
    <title></title>
    <!-- include meta tags -->
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type"/>
        
    <!-- include css -->
    <?php if($dev): ?>
    <link rel="stylesheet/less" type="text/less" href="/dev/css/reset.less" />
    <link rel="stylesheet/less" type="text/less" href="/dev/css/config.less" />
    <link rel="stylesheet/less" type="text/less" href="/dev/css/functions.less" />
    <link rel="stylesheet/less" type="text/less" href="/dev/css/typography.less" />
    <link rel="stylesheet/less" type="text/less" href="/dev/css/app.less" />
    <?php else: ?>
    <link rel="stylesheet" type="text/css" href="/build/css/all.min.css" />
    <?php endif; ?>
     
</head>
<body>

adsfds

</body>
    <?php if($dev): ?>
    <script>
      var less = {
        env: "development",
        async: false,
        fileAsync: false,
        poll: 1000,
        functions: {},
        dumpLineNumbers: "comments",
        relativeUrls: false,
      };
    </script>
    <script type="text/javascript" src="/dev/js/less.min.js"></script>
    <script type="text/javascript" src="/dev/js/jquery.js"></script>
    <script type="text/javascript" src="/dev/js/modernizr.js"></script>
    <script type="text/javascript" src="/dev/js/mustache.js"></script>
    <script type="text/javascript" src="/dev/js/app.js"></script>  

    <script>
        less.watch();
    </script>

    <?php else: ?>
    <script type="text/javascript" src="/build/js/all.min.js"></script> 
    <?php endif;?>
    <!-- include js -->
    

</html>