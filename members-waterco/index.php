<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="description" content="">
        <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">
        <meta name="generator" content="Jekyll v4.0.1">
        <title>Water Co. Billing</title>

        <link rel="canonical" href="https://getbootstrap.com/docs/4.5/examples/starter-template/">

        <!-- Bootstrap core CSS -->
        <link href="assets/css/bootstrap.css" rel="stylesheet">

        <style>
            .bd-placeholder-img {
                font-size: 1.125rem;
                text-anchor: middle;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
            }

            @media (min-width: 768px) {
                .bd-placeholder-img-lg {
                    font-size: 3.5rem;
                }
            }
        </style>
        
        <link href="assets/css/starter-template.css" rel="stylesheet">
    </head>
    <body>
        <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
            <a class="navbar-brand" href="#">Water Co.</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarsExampleDefault">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="index.php">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="index.php?page=members">Join as a Member </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="index.php?page=memberdetails">View your details</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="index.php?page=payment">Make a Payment</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="index.php?page=bill">View your Bill</a>
                    </li>
                </ul>
            </div>
        </nav>

        <main role="main" class="container-fluid">
            <?php
            if (isset($_GET['page'])) {
                $page = $_GET['page'];
                if ($page == 'members') {
                    include 'members.php';
                } elseif ($page == 'memberdetails') {
                    include 'memberdetails.php';
                } elseif ($page == 'bill') {
                    include 'bill.php';
                } else {
                    include 'payment.php';
                }
            } else {
                include 'home.php';
            } 
            ?>

        </main><!-- /.container -->
        
        <script src="assets/js/jquery-3.3.1.js"></script>
        <script src="assets/js/bootstrap.bundle.js"></script>
        <script src="assets/js/waterco.js"></script>
    </body>
</html>
