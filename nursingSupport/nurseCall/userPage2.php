<?php
require_once('userPage.php')
?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>userPage</title>
        <link href="nurseCall.css" rel="stylesheet" type="text/css">
    </head>
    <body>
        <section class="app">
            <h1>
                <?php echo '<div id="user">'.$_SESSION['username'].'さん</div>'; ?></h1>
            <div id="first">
                <h2>1. やってもらいたいことは何についてですか？</h2>
                <ol style = "list-style-type:none;" class="container">
                    <li class="item">
                        <img src="../album/goyaPAUI3417_TP_V4.jpg"><br>
                        <Button id="food" class="choice" onclick="onClickFood()">1. ごはん</Button>
                    </li>
                    <li class="item">
                        <img src="../album/AMizuho18116043_TP_V4.jpg"><br>
                        <Button id="drink" class="choice" onclick="onClickDrink()">2. のみもの</Button>
                    </li>
                    <li class="item">
                        <img src="../album/wc-111092_640.jpg"><br>
                        <Button id="toilet" class="choice" onclick="onClickToilet()">3. トイレ</Button>
                    </li>
                    <li class="item">
                        <img src="../album/HOTEL86_daiyokujyou220150125021047_TP_V4.jpg"><br>
                        <Button id="bath" class="choice" onclick="onClickBath()">4. おふろ</Button>
                    </li>
                    <li class="item">
                        <img src="../album/kaigoIMGL8315_TP_V4.jpg"><br>
                        <Button id="cloth" class="choice" onclick="onClickCloth()">5. 服 / めがね</Button>
                    </li>
                    <li class="item">
                        <img src="../album/kaigoIMGL8291_TP_V4.jpg"><br>
                        <Button id="bed" class="choice" onclick="onClickBed()">6. ベッド</Button> 
                    </li>
                    <li class="item">
                        <img src="../album/tvGFVS3929_TP_V4.jpg"><br>
                        <Button id="tv" class="choice" onclick="onClickTv()">7. テレビ / ラジオ</Button>  
                    </li>
                    <li class="item">
                        <img src="../album/ookawa_MKT4832-11760_TP_V4.jpg"><br>
                        <Button id="ache" class="choice" onclick="onClickAche()">8. いたみ / かゆみ</Button> 
                    </li>
                    <li class="item">
                        <img src="../album/nurse-587924_640.png"><br>
                        <Button id="nurse" class="choice" onclick="onClickNurse()">9. かんごしさん</Button>
                    </li>
                </ol>
            </div>
            <div class="box">
                <h2><div id="next"></div></h2>
                <div id="emergencyLevel"></div>
                <ol style = "list-style-type:none;" class="container">
                    <li class="item">
                        <img src="" id="image1"><br>
                        <Button id="element1" class="choice" onclick="onClickElement1()"></Button>
                    </li>
                    <li class="item">
                        <img src="" id="image2"><br>
                        <Button id="element2" class="choice" onclick="onClickElement2()"></Button>
                    </li>
                    <li class="item">
                        <img src="" id="image3"><br>
                        <Button id="element3" class="choice" onclick="onClickElement3()"></Button>
                    </li>
                </ol>
            </div>
            <div class="box2">
                <h2><div class="msg"></div></h2>
            </div>
            <div class="box3">
                <div class="home2">
                    <div class="containerFoam2">
                        <h3>データ送信</h3>
                        <form action="adminPage.php" method="POST">
                        <div>
                            <div class="form-group">
                                <input type="text" id="sender" name="sender" value="">
                            </div>
                            <div class="form-group">
                                <input type="text" id="request" name="request" value="">
                            </div>
                            <div class="form-group">
                                <input type="number" id="level" name="level" value="">
                            </div>
                        </div>
                        <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        <script type="text/javascript" src="nurseCall.js"></script>
        <script type="text/javascript" src="nurseCall2.js"></script>
        </section>
    </body>
</html>