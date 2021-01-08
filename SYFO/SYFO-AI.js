/*jslint plusplus: true, evil: true */
/*global console, alert, prompt*/

/* By 7Wdev */
/* var string = "hi bye love chooclate",
    result = string.replace(/l/ig, " ");

console.log(result); */
/* for education stuff*/

/*                              var
                    tName="-1x^2   +2.9x",
                         syfo = console;
abc = tName.replace(/x/g, "").replace("^2", "").replace(/\s/g, "");
       $re = /-?\d+(?:\.\d+)?/mgi;$str = abc.toString();
                    var $aa = $str.match($re);
*/

/* This code is free to use I coded it for educational and experemintal uses only!
 * Name: SYFO-AI
 * Type: Bot
 * Author: 7Wdev
 * Version: 0.2.0-alpha
 * All copyrights are reserved!
 * Feel free to edit the code, feel free to contribute...
 * Desctription: Basic AI that can solve squared(quadric) equations...
 * Known issues: this bot does not understand Roots, Fractions, the Quadric Formula(law), Can not arrange the equation etc...
 * This AI uses Trinom(law) to solve the equations!
 * Obfucation Level = null (not obfuscated)
 */

//----------------------------------------------------------------------------------------------------------------------------//

SEND("NOTE: Don't be lazy, arrange the equation or\nI may solve the equation wrongly!\n");
const I = "2x^2 +4x -4";
const SYFO = console;
var A,
    B,
    C;

function SEND(string1)
  {
      return console.log(string1);
  }

function isSolvable()
  {
      if((parseFloat(B) * parseFloat(B)) - 4 * (parseFloat(A) * parseFloat(C)) >= 0) return true;
      if((parseFloat(B) * parseFloat(B)) - 4 * (parseFloat(A) * parseFloat(C)) < 0) return false;
  }

function findABC(INPUT)
  {
      var XSTR = "x",
          XSTRB = "X",
          XP2 = "^2",
          $i,
          $ib,
          $ii,
          $iib;

      if(INPUT.indexOf(XSTR.concat(XP2)) != -1 || INPUT.indexOf(XSTRB.concat(XP2)) != -1)
       {
           $i = INPUT.indexOf(XSTR.concat(XP2));
           $ib = INPUT.indexOf(XSTRB.concat(XP2));
           if($i != -1)
            {
                A = INPUT.slice(0, $i).replace(/\s/g, "").replace(/\*/g, "").replace(/[+]/g, "");
                if(A == "" || A == "+") A = "1";
                if(A == "-") A = "-1";
            } else if($ib != -1)
                {
                    A = INPUT.slice(0, $ib).replace(/\s/g, "").replace(/\*/g, "").replace(/[+]/g, "");
                    if(A == "" || A == "+") A = "1";
                    if(A == "-") A = "-1";
                }
       } else
           {
               //Overiding The Msg;
           }

      if(INPUT.indexOf(XSTR, $i + 4) != -1 || INPUT.indexOf(XSTRB, $ib + 4) != -1)
       {
           $ii = INPUT.indexOf(XSTR, $i + 4);
           $iib = INPUT.indexOf(XSTRB, $ib + 4);
           if($ii != -1)
            {
                B = INPUT.slice($i + 4, $ii).replace(/\s/g, "").replace(/\*/g, "").replace(/[+]/g, "");
                if(B == "" || B == "+") B = "1";
                if(B == "-") B = "-1";
            } else if($iib != -1)
                {
                    B = INPUT.slice($ib + 4, $iib).replace(/\s/g, "").replace(/\*/g, "").replace(/[+]/g, "");
                    if(B == "" || B == "+") B = "1";
                    if(B == "-") B = "-1";
                }
       } else 
           {
               B = "0";
           }

      if(B != "0")
       {
           if(INPUT.length <= $ii)
            {
                C = "0";
            } else if($ii != -1)
                {
                    $ = INPUT.length;
                    C = INPUT.slice($ii + 1, $).replace(/\s/g, "").replace(/\*/g, "").replace(/[+]/g, "");
                    if(C == "" || C == "+") C = "0";
                    if(C == "-") C = "0";
                } else if($iib != -1)
                    {
                        $ = INPUT.length;
                        C = INPUT.slice($iib + 1, $).replace(/\s/g, "").replace(/\*/g, "").replace(/[+]/g, "");
                        if(C == "" || C == "+") C = "0";
                        if(C == "-") C = "0";
                    }
       } else
           {
               if(INPUT.length <= $i + 3 || INPUT.length <= $ib + 3)
                {
                    C = "0";
                } else if($i != -1)
                    {
                        $2 = INPUT.length;
                        C = INPUT.slice($i + 3, $2).replace(/\s/g, "").replace(/\*/g, "").replace(/[+]/g, "");
                        if(C == "" || C == "+") C = "0";
                        if(C == "-") C = "0";
                    } else if($ib != -1)
                        {
                            $2 = INPUT.length;
                            C = INPUT.slice($ib + 3, $2).replace(/\s/g, "").replace(/\*/g, "").replace(/[+]/g, "");
                            if(C == "" || C == "+") C = "0";
                            if(C == "-") C = "0";
                        }

           }
  }

//----------------------------------------------------------------------------------------------------------------------------//

if(I.indexOf("/") != -1 || I.indexOf("√") != -1 || I.indexOf("*") != -1)
 {
     SEND("I can not solve this equation, sorry dude ;(");
 } else if(I.indexOf("x") == -1 && I.indexOf("X") == -1)
     {
         SEND("I can not solve this equation, sorry dude ;(");
     } else if(I.indexOf("x") != -1 && I.indexOf("X") != -1)
         {
             SEND("Please put only one variable!\n(put an upper-case or a lower-case 'x' only in your equation)");
         } else
             {
                 findABC(I);
                 if(I.indexOf("x") != -1 || I.indexOf("X") != -1)
                  {
                      if(A.match(/^-?(\d+\.?\d*)$|(\d*\.?\d+)$/) !== null && B.match(/^-?(\d+\.?\d*)$|(\d*\.?\d+)$/) !== null && C.match(/^-?(\d+\.?\d*)$|(\d*\.?\d+)$/) !== null)
                       {
                           $abcmsg = "First of all as we learnt in the f*cking school,\nYou should extract the values of each one\nOf the A + B + C params!" + "\nA: " + A + "\nB: " + B + "\nC: " + C;
                           if(I.indexOf("x") != -1 && I.indexOf("X") == -1) SEND($abcmsg);
                           if(I.indexOf("x") == -1 && I.indexOf("X") != -1) SEND($abcmsg);
                           YES = true,
                           NO = false,
                           SOLVABLE = new Boolean(isSolvable());
                           Trinom();
                       } else
                           {
                               if(I.indexOf("x") != -1 && I.indexOf("X") != -1)
                                {
                                    //Nothing...
                                } else
                                    {
                                        SEND("Hi, I am good at solving squared equations!");
                                        SEND("However this equation doesn't seem familiar to me...");
                                        setTimeout(function(){SEND("Please be sure that the equation is arranged correctly,\nOr check if It is a squared equation...");}, 300);
                                    }
                           }
                  }
             }

//----------------------------------------------------------------------------------------------------------------------------//

function Trinom()
  {
      SEND("\nAfter that lets check if there is solution\nFor this equation or there isn't!");
      if(SOLVABLE == YES)
       {
           if(B != "0" || B != 0)
            {
                SEND("\n√(" + B + "^2 - 4 * " + A + " * " + C + ")\nReturns a positive number so that means, we can solve this equation...");
                A = parseFloat(A);
                B = parseFloat(B);
                C = parseFloat(C);
                B = B / A;
                C = C / A;
                A = A / A;
                let middlepoint = parseFloat(B) / 2;
                SEND("\nLets solve it via Trinom:" +
                     "\n- [" + I + " = 0]" +
                     "\n\n We divide all the equation by A!" +
                     "\n- N1 + N1 = B" +
                     "\n- N1 * N2 = C" +
                     "\n- (x + N1) * (x + N2)" +
                     "\n\nTo find the N1 and N2 we should get the middle point of B:" +
                     "\n- B / 2 -> " + middlepoint.toString() +
                     "\n\nMiddle point = " + middlepoint.toString() + " | N1 ------ Middle ------ N2 | U is the distance between N1 and the Middle, N2 and the Middle:" +
                     "\n- (" + middlepoint.toString() + " - U) * (" + middlepoint.toString() + " + U) = " + C.toString() +
                     "\n- " + (middlepoint * middlepoint).toString() + " -U^2 = " + C.toString() +
                     "\n- -U^2 = " + (C + (-1 * middlepoint * middlepoint)).toString() +
                     "\n- U = √" + (-1 * (C + (-1 * middlepoint * middlepoint))).toString() +
                     "\n\nNow we know the N1 and N2:");

                setTimeout(function(){SEND("- (x + (" + middlepoint.toString() + " - " + "√" + (-1 * (C + (-1 * middlepoint * middlepoint))).toString() + ") * (x + (" + middlepoint.toString() + " + " + "√" + (-1 * (C + (-1 * middlepoint * middlepoint))).toString() + ") = 0" + "\nX1 = " + (-1 * (middlepoint - Math.sqrt((-1 * (C + (-1 * middlepoint * middlepoint)))))).toString() + ", X2 = " + (-1 * (middlepoint + Math.sqrt((-1 * (C + (-1 * middlepoint * middlepoint)))))));}, 400);
            } else
                {
                    C = parseFloat(C);
                    A = parseFloat(A);
                    X1 = Math.sqrt((-1 * C) / A);
                    X2 = -1 * X1;
                    SEND("X1 = " + X1.toString() + ", X2 = " + X2.toString());
                }  
       }
      if(SOLVABLE == NO) SEND("\n√(" + B + "^2 - 4 * " + A + " * " + C + ")\nReturns a negative number so that means, we can not solve this equation...");
   }

//----------------------------------------------------------------------------------------------------------------------------//

/*
 * SOME TRASHY TEXTS
 *
 * 
 * 
 * 
 * 
 */

var
BOB = ["not-obfuscated"];
