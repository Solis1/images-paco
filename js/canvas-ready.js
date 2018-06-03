var mainCanvas = [];
var glosario1 = new fabric.Canvas("glosario1");
        glosario1.setWidth(180);
        glosario1.setHeight(180);
        img1 = new Image();
        img1.src = "img/numbers/1.png";
        var img1 = new fabric.Image(img1, {
                    selectable: 1,
                    left: 23,
                    top: 90,
                    scaleX: 50 / img1.width,
                    scaleY: 50 / img1.height
                })
        letter_g1 = new Image();
        letter_g1.src = "img/letters/g.png"
        var letter_g1 = new fabric.Image(letter_g1, {
                    selectable: 1,
                    left: 120,
                    top: 30,
                    scaleX: 50 / letter_g1.width,
                    scaleY: 50 / letter_g1.height
                })
        glosario1.add(img1);
        glosario1.add(letter_g1);
        glosario1.setBackgroundImage('img/pentagono_cafe.png', glosario1.renderAll.bind(glosario1));
        mainCanvas.push(glosario1);
var glosario2 = new fabric.Canvas("glosario2");
        glosario2.setWidth(180);
        glosario2.setHeight(180);
        glosario2.setBackgroundImage('img/pentagono_cafe.png', glosario2.renderAll.bind(glosario2));
        img2 = new Image();
        img2.src = "img/numbers/2.png";
        var img2 = new fabric.Image(img2, {
                    selectable: 1,
                    left: 23,
                    top: 90,
                    scaleX: 50 / img2.width,
                    scaleY: 50 / img2.height
                })
        letter_g2 = new Image();
        letter_g2.src = "img/letters/g.png"
        var letter_g2 = new fabric.Image(letter_g2, {
                    selectable: 1,
                    left: 120,
                    top: 30,
                    scaleX: 50 / letter_g2.width,
                    scaleY: 50 / letter_g2.height
                })
        glosario2.add(img2);
        glosario2.add(letter_g2);
        mainCanvas.push(glosario2);
 var glosario3 = new fabric.Canvas("glosario3");
        glosario3.setWidth(180);
        glosario3.setHeight(180);
        glosario3.setBackgroundImage('img/pentagono_cafe.png', glosario3.renderAll.bind(glosario3));
        img3 = new Image();
        img3.src = "img/numbers/3.png";
        var img3 = new fabric.Image(img3, {
                    selectable: 1,
                    left: 23,
                    top: 90,
                    scaleX: 50 / img3.width,
                    scaleY: 50 / img3.height
                })
        letter_g3 = new Image();
        letter_g3.src = "img/letters/g.png"
        var letter_g3 = new fabric.Image(letter_g3, {
                    selectable: 1,
                    left: 120,
                    top: 30,
                    scaleX: 50 / letter_g3.width,
                    scaleY: 50 / letter_g3.height
                })
        glosario3.add(img3);
        glosario3.add(letter_g3);
        mainCanvas.push(glosario3);
 var glosario4 = new fabric.Canvas("glosario4");
        glosario4.setWidth(180);
        glosario4.setHeight(180);
        glosario4.setBackgroundImage('img/pentagono_cafe.png', glosario4.renderAll.bind(glosario4));
        img4 = new Image();
        img4.src = "img/numbers/4.png";
        var img4 = new fabric.Image(img4, {
                    selectable: 1,
                    left: 23,
                    top: 90,
                    scaleX: 50 / img4.width,
                    scaleY: 50 / img4.height
                });
        letter_g4 = new Image();
        letter_g4.src = "img/letters/g.png"
        var letter_g4 = new fabric.Image(letter_g4, {
                    selectable: 1,
                    left: 120,
                    top: 30,
                    scaleX: 50 / letter_g4.width,
                    scaleY: 50 / letter_g4.height
                });
        glosario4.add(img4);
        glosario4.add(letter_g4);
        mainCanvas.push(glosario4);
 var glosario5 = new fabric.Canvas("glosario5");
        glosario5.setWidth(180);
        glosario5.setHeight(180);
        glosario5.setBackgroundImage('img/pentagono_cafe.png', glosario5.renderAll.bind(glosario5));
        img5 = new Image();
        img5.src = "img/numbers/5.png";
        var img5 = new fabric.Image(img5, {
                    selectable: 1,
                    left: 23,
                    top: 90,
                    scaleX: 50 / img5.width,
                    scaleY: 50 / img5.height
                });
        letter_g5 = new Image();
        letter_g5.src = "img/letters/g.png"
        var letter_g5 = new fabric.Image(letter_g5, {
                    selectable: 1,
                    left: 120,
                    top: 30,
                    scaleX: 50 / letter_g5.width,
                    scaleY: 50 / letter_g5.height
                });
        glosario5.add(img5);
        glosario5.add(letter_g5);
        mainCanvas.push(glosario5);
var examen1 = new fabric.Canvas("examen1");
        examen1.setWidth(180);
        examen1.setHeight(180);
        examen1.setBackgroundImage('img/circulo_azul.png', examen1.renderAll.bind(examen1));
        img6 = new Image();
        img6.src = "img/numbers/1.png";
        var img6 = new fabric.Image(img6, {
                    selectable: 1,
                    left: 23,
                    top: 90,
                    scaleX: 50 / img6.width,
                    scaleY: 50 / img6.height
                })
        letter_e1 = new Image();
        letter_e1.src = "img/letters/e.png"
        var letter_e1 = new fabric.Image(letter_e1, {
                    selectable: 1,
                    left: 120,
                    top: 30,
                    scaleX: 50 / letter_e1.width,
                    scaleY: 50 / letter_e1.height
                });
        examen1.add(img6);
        examen1.add(letter_e1);
        mainCanvas.push(examen1);
var examen2 = new fabric.Canvas("examen2");
        examen2.setWidth(180);
        examen2.setHeight(180);
        examen2.setBackgroundImage('img/circulo_azul.png', examen2.renderAll.bind(examen2));
        img7 = new Image();
        img7.src = "img/numbers/2.png";
        var img7 = new fabric.Image(img7, {
                    selectable: 1,
                    left: 23,
                    top: 90,
                    scaleX: 50 / img7.width,
                    scaleY: 50 / img7.height
                });
        letter_e2 = new Image();
        letter_e2.src = "img/letters/e.png"
        var letter_e2 = new fabric.Image(letter_e2, {
                    selectable: 1,
                    left: 120,
                    top: 30,
                    scaleX: 50 / letter_e2.width,
                    scaleY: 50 / letter_e2.height
                });
        examen2.add(img7);
        examen2.add(letter_e2);
        mainCanvas.push(examen2);
 var examen3 = new fabric.Canvas("examen3");
        examen3.setWidth(180);
        examen3.setHeight(180);
        examen3.setBackgroundImage('img/circulo_azul.png', examen3.renderAll.bind(examen3));
        img8 = new Image();
        img8.src = "img/numbers/3.png";
        var img8 = new fabric.Image(img8, {
                    selectable: 1,
                    left: 23,
                    top: 90,
                    scaleX: 50 / img8.width,
                    scaleY: 50 / img8.height
                })
        letter_e3 = new Image();
        letter_e3.src = "img/letters/e.png"
        var letter_e3 = new fabric.Image(letter_e3, {
                    selectable: 1,
                    left: 120,
                    top: 30,
                    scaleX: 50 / letter_e3.width,
                    scaleY: 50 / letter_e3.height
                });
        examen3.add(img8);
        examen3.add(letter_e3);
        mainCanvas.push(examen3);
 var examen4 = new fabric.Canvas("examen4");
        examen4.setWidth(180);
        examen4.setHeight(180);
        examen4.setBackgroundImage('img/circulo_azul.png', examen4.renderAll.bind(examen4));
        img9 = new Image();
        img9.src = "img/numbers/4.png";
        var img9 = new fabric.Image(img9, {
                    selectable: 1,
                    left: 23,
                    top: 90,
                    scaleX: 50 / img9.width,
                    scaleY: 50 / img9.height
                })
        letter_e4 = new Image();
        letter_e4.src = "img/letters/e.png"
        var letter_e4 = new fabric.Image(letter_e4, {
                    selectable: 1,
                    left: 120,
                    top: 30,
                    scaleX: 50 / letter_e4.width,
                    scaleY: 50 / letter_e4.height
                });
        examen4.add(img9);
        examen4.add(letter_e4);
        mainCanvas.push(examen4);
 var examen5 = new fabric.Canvas("examen5");
        examen5.setWidth(180);
        examen5.setHeight(180);
        examen5.setBackgroundImage('img/circulo_azul.png', examen5.renderAll.bind(examen5));
        img10 = new Image();
        img10.src = "img/numbers/5.png";
        var img10 = new fabric.Image(img10, {
                    selectable: 1,
                    left: 23,
                    top: 90,
                    scaleX: 50 / img10.width,
                    scaleY: 50 / img10.height
                })
        letter_e5 = new Image();
        letter_e5.src = "img/letters/e.png"
        var letter_e5 = new fabric.Image(letter_e5, {
                    selectable: 1,
                    left: 120,
                    top: 30,
                    scaleX: 50 / letter_e5.width,
                    scaleY: 50 / letter_e5.height
                });
        examen5.add(img10);
        examen5.add(letter_e5);
        mainCanvas.push(examen5);
 var lectura1 = new fabric.Canvas("lectura1");
        lectura1.setWidth(180);
        lectura1.setHeight(180);
        lectura1.setBackgroundImage('img/rombo_azul.png', lectura1.renderAll.bind(lectura1));
        img11 = new Image();
        img11.src = "img/numbers/1.png";
        var img11 = new fabric.Image(img11, {
                    selectable: 1,
                    left: 23,
                    top: 90,
                    scaleX: 50 / img11.width,
                    scaleY: 50 / img11.height
                })
        letter_l1 = new Image();
        letter_l1.src = "img/letters/l.png"
        var letter_l1 = new fabric.Image(letter_l1, {
                    selectable: 1,
                    left: 120,
                    top: 20,
                    scaleX: 50 / letter_l1.width,
                    scaleY: 50 / letter_l1.height
                });
        lectura1.add(img11);
        lectura1.add(letter_l1);
        mainCanvas.push(lectura1);
var lectura2 = new fabric.Canvas("lectura2");
       lectura2.setWidth(180);
       lectura2.setHeight(180);
       lectura2.setBackgroundImage('img/rombo_azul.png', lectura2.renderAll.bind(lectura2));
       img12 = new Image();
       img12.src = "img/numbers/2.png";
        var img12 = new fabric.Image(img12, {
                    selectable: 1,
                    left: 23,
                    top: 90,
                    scaleX: 50 / img12.width,
                    scaleY: 50 / img12.height
                })
        letter_l2 = new Image();
        letter_l2.src = "img/letters/l.png"
        var letter_l2 = new fabric.Image(letter_l2, {
                    selectable: 1,
                    left: 120,
                    top: 20,
                    scaleX: 50 / letter_l2.width,
                    scaleY: 50 / letter_l2.height
                });
        lectura2.add(img12);
        lectura2.add(letter_l2);
        mainCanvas.push(lectura2);
 var lectura3 = new fabric.Canvas("lectura3");
        lectura3.setWidth(180);
        lectura3.setHeight(180);
        lectura3.setBackgroundImage('img/rombo_azul.png', lectura3.renderAll.bind(lectura3));
        img13 = new Image();
        img13.src = "img/numbers/3.png";
        var img13 = new fabric.Image(img13, {
                    selectable: 1,
                    left: 23,
                    top: 90,
                    scaleX: 50 / img13.width,
                    scaleY: 50 / img13.height
                })
        letter_l3 = new Image();
        letter_l3.src = "img/letters/l.png"
        var letter_l3 = new fabric.Image(letter_l3, {
                    selectable: 1,
                    left: 120,
                    top: 20,
                    scaleX: 50 / letter_l3.width,
                    scaleY: 50 / letter_l3.height
                });
        lectura3.add(img13);
        lectura3.add(letter_l3);
        mainCanvas.push(lectura3);
 var lectura4 = new fabric.Canvas("lectura4");
        lectura4.setWidth(180);
        lectura4.setHeight(180);
        lectura4.setBackgroundImage('img/rombo_azul.png', lectura4.renderAll.bind(lectura4));
        img14 = new Image();
        img14.src = "img/numbers/4.png";
        var img14 = new fabric.Image(img14, {
                    selectable: 1,
                    left: 23,
                    top: 90,
                    scaleX: 50 / img14.width,
                    scaleY: 50 / img14.height
                })
        letter_l4 = new Image();
        letter_l4.src = "img/letters/l.png"
        var letter_l4 = new fabric.Image(letter_l4, {
                    selectable: 1,
                    left: 120,
                    top: 20,
                    scaleX: 50 / letter_l4.width,
                    scaleY: 50 / letter_l4.height
                });
        lectura4.add(img14);
        lectura4.add(letter_l4);
        mainCanvas.push(lectura4);
 var lectura5 = new fabric.Canvas("lectura5");
        lectura5.setWidth(180);
        lectura5.setHeight(180);
        lectura5.setBackgroundImage('img/rombo_azul.png', lectura5.renderAll.bind(lectura5));
        img15 = new Image();
        img15.src = "img/numbers/5.png";
        var img15 = new fabric.Image(img15, {
                    selectable: 1,
                    left: 23,
                    top: 90,
                    scaleX: 50 / img15.width,
                    scaleY: 50 / img15.height
                })
        letter_l5 = new Image();
        letter_l5.src = "img/letters/l.png"
        var letter_l5 = new fabric.Image(letter_l5, {
                    selectable: 1,
                    left: 120,
                    top: 20,
                    scaleX: 50 / letter_l5.width,
                    scaleY: 50 / letter_l5.height
                });
        lectura5.add(img15);
        lectura5.add(letter_l5);
        mainCanvas.push(lectura5);
var bloque1 = new fabric.Canvas("bloque1");
        bloque1.setWidth(180);
        bloque1.setHeight(180);
        bloque1.setBackgroundImage('img/rombo_verde.png', bloque1.renderAll.bind(bloque1));
        img_num = new Image();
        img_num.src = "img/numbers/one.png"
        var img_num = new fabric.Image(img_num, {
                    selectable: 1,
                    left: 2,
                    top: 2
                });
        bloque1.add(img_num);
        mainCanvas.push(bloque1);
var bloque2 = new fabric.Canvas("bloque2");
        bloque2.setWidth(180);
        bloque2.setHeight(180);
        bloque2.setBackgroundImage('img/rombo_verde.png', bloque2.renderAll.bind(bloque2));
        img_num2 = new Image();
        img_num2.src = "img/numbers/two.png"
        var img_num2 = new fabric.Image(img_num2, {
                    selectable: 1,
                    left: 2,
                    top: 2
                });
        bloque2.add(img_num2);
        mainCanvas.push(bloque2);
var bloque3 = new fabric.Canvas("bloque3");
        bloque3.setWidth(180);
        bloque3.setHeight(180);
        bloque3.setBackgroundImage('img/rombo_verde.png', bloque3.renderAll.bind(bloque3));
        img_num3 = new Image();
        img_num3.src = "img/numbers/three.png"
        var img_num3 = new fabric.Image(img_num3, {
                    selectable: 1,
                    left: 2,
                    top: 2,
                    scaleX: 60 / img_num3.width,
                    scaleY: 60 / img_num3.height
                });
        bloque3.add(img_num3);
        mainCanvas.push(bloque3);
var bloque4 = new fabric.Canvas("bloque4");
        bloque4.setWidth(180);
        bloque4.setHeight(180);
        bloque4.setBackgroundImage('img/rombo_verde.png', bloque4.renderAll.bind(bloque4));
        img_num3 = new Image();
        img_num3.src = "img/numbers/four.png"
        var img_num3 = new fabric.Image(img_num3, {
                    selectable: 1,
                    left: 2,
                    top: 2
                });
        bloque4.add(img_num3);
        mainCanvas.push(bloque4);
var bloque5 = new fabric.Canvas("bloque5");
        bloque5.setWidth(180);
        bloque5.setHeight(180);
        bloque5.setBackgroundImage('img/rombo_verde.png', bloque5.renderAll.bind(bloque5));
        img_num4 = new Image();
        img_num4.src = "img/numbers/five.png"
        var img_num4 = new fabric.Image(img_num4, {
                    selectable: 1,
                    left: 2,
                    top: 2
                });
        bloque5.add(img_num4);
        mainCanvas.push(bloque5);
var exercise_canvas = new fabric.Canvas("exercise_canvas");
       exercise_canvas.setWidth(180);
       exercise_canvas.setHeight(180);
       exercise_canvas.setBackgroundImage('img/badge_purple.png', exercise_canvas.renderAll.bind(exercise_canvas));
       mainCanvas.push(exercise_canvas);
