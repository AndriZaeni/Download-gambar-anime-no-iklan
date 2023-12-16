<!DOCTYPE html>
<html>
<head>
    <title>YouTube Clone</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f1f1f1;
        }
        .header {
            background-color: #cc0000;
            color: white;
            padding: 10px;
            text-align: center;
        }
        .sidebar {
            width: 200px;
            background-color: #f9f9f9;
            position: absolute;
            height: 100%;
            padding: 10px;
        }
        .content {
            margin-left: 210px;
            padding: 10px;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>YouTube Clone</h1>
    </div>
    <div class="sidebar">
        <p>Sidebar content...</p>
    </div>
    <div class="content">
        <p>Main content...</p>
    </div>
</body>
</html>
var express = require('express');
var app = express();
var downloadCount = 0;

app.get('/download', function(req, res){
    if(downloadCount < 5) {
        downloadCount++;
        res.download('/path/to/your/image.jpg');
    } else {
        res.status(429).send('Anda telah mencapai batas download.');
    }
});

app.listen(3000);
