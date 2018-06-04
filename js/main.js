$(document).ready(function() {

  loadImage("materiasRead", 1);
  loadImage("materiasHelp", 1);
  // loadImage("materiasHelp", 1);

    $(document).on("change", "select[ng-name='grados']", function(){
      loadImage("materiasRead", parseInt($(this).val()));
    });

    $(document).on("change", "select[ng-name='gradosHelp']", function(){
      loadImage("materiasHelp", parseInt($(this).val()));
    });

    $(document).on("change", ".check-title", function(){
        var parent = $(this).parent().parent();
        if($(this).is(':checked')){
            $(parent).find("input.form-control").prop("disabled", false);
        }else{
            $(parent).find("input.form-control").prop("disabled", true);
        }
    });

    $(document).scroll(function(){

        let scroll = window.pageYOffset ;
        if(scroll > 160){
            $("header").addClass("fix-header");
            $("#logo").addClass("smaller-img");
            $("button.navbar-toggler").addClass("smaller-menu");
           }else{
            $("header").removeClass("fix-header");
            $("#logo").removeClass("smaller-img");
            $(".navbar-toggler").removeClass("smaller-menu");
           }

    });

    $(".show-pop").popover({
        trigger: "manual",
        delay: {
            "show": 500,
            "hide": 100
        }
    });

    $(document).on("click", ".delete-img", function(){

        let row = $(this).parent().parent();

        switch($(row).attr("class")){
            case "row bloque1":
                    glosario1.remove(letter_g1);
                    examen1.remove(letter_e1);
                    lectura1.remove(letter_l1);
                break;
            case "row bloque2":
                    glosario2.remove(letter_g2);
                    examen2.remove(letter_e2);
                    lectura2.remove(letter_l2);
                break;
            case "row bloque3":
                    glosario3.remove(letter_g3);
                    examen3.remove(letter_e3);
                    lectura3.remove(letter_l3);
                break;
            case "row bloque4":
                    glosario4.remove(letter_g4);
                    examen4.remove(letter_e4);
                    lectura4.remove(letter_l4);
                break;
            case "row bloque5":
                    glosario5.remove(letter_g5);
                    examen5.remove(letter_e5);
                    lectura5.remove(letter_l5);
                break;
        }
        console.log();
        $(row).find(".delete-img").prop('disabled', true);
        $(row).find(".add-img").prop('disabled', false);

    });

    $(document).on("click", ".add-img", function(){

        let row = $(this).parent().parent();

        switch($(row).attr("class")){
            case "row bloque1":
                    glosario1.add(letter_g1);
                    examen1.add(letter_e1);
                    lectura1.add(letter_l1);
                break;
            case "row bloque2":
                    glosario2.add(letter_g2);
                    examen2.add(letter_e2);
                    lectura2.add(letter_l2);
                break;
            case "row bloque3":
                    glosario3.add(letter_g3);
                    examen3.add(letter_e3);
                    lectura3.add(letter_l3);
                break;
            case "row bloque4":
                    glosario4.add(letter_g4);
                    examen4.add(letter_e4);
                    lectura4.add(letter_l4);
                break;
            case "row bloque5":
                    glosario5.add(letter_g5);
                    examen5.add(letter_e5);
                    lectura5.add(letter_l5);
                break;
        }

        $(row).find(".add-img").prop('disabled', true);
        $(row).find(".delete-img").prop('disabled', false);

    });

    $(document).on("click", ".delete-num", function(){

        let row = $(this).parent().parent();

        switch($(row).attr("class")){
            case "row bloque1":
                    glosario1.remove(img1);
                    examen1.remove(img6);
                    lectura1.remove(img11);
                break;
            case "row bloque2":
                    glosario2.remove(img2);
                    examen2.remove(img7);
                    lectura2.remove(img12);
                break;
            case "row bloque3":
                    glosario3.remove(img3);
                    examen3.remove(img8);
                    lectura3.remove(img13);
                break;
            case "row bloque4":
                    glosario4.remove(img4);
                    examen4.remove(img9);
                    lectura4.remove(img14);
                break;
            case "row bloque5":
                    glosario5.remove(img5);
                    examen5.remove(img10);
                    lectura5.remove(img15);
                break;
        }

        $(row).find(".add-num").prop('disabled', false);
        $(row).find(".delete-num").prop('disabled', true);

    });

    $(document).on("click", ".add-num", function(){

        let row = $(this).parent().parent();

        switch($(row).attr("class")){
            case "row bloque1":
                    glosario1.add(img1);
                    examen1.add(img6);
                    lectura1.add(img11);
                break;
            case "row bloque2":
                    glosario2.add(img2);
                    examen2.add(img7);
                    lectura2.add(img12);
                break;
            case "row bloque3":
                    glosario3.add(img3);
                    examen3.add(img8);
                    lectura3.add(img13);
                break;
            case "row bloque4":
                    glosario4.add(img4);
                    examen4.add(img9);
                    lectura4.add(img14);
                break;
            case "row bloque5":
                    glosario5.add(img5);
                    examen5.add(img10);
                    lectura5.add(img15);
                break;
        }

        $(row).find(".add-num").prop('disabled', true);
        $(row).find(".delete-num").prop('disabled', false);

    });

    $(".imageLoader").on("change", function (e) {
        var parent_element = $(this).attr("value");

        var reader = new FileReader();
        reader.onload = function (event) {
            var img = new Image();
            img.onload = function () {
               if(parent_element == "bloques"){
                   var imgInstance1 = new fabric.Image(img, {
                        selectable: 1,
                        scaleX: 90 / img.width,
                        scaleY: 90 / img.height
                    });
                    var imgInstance2 = new fabric.Image(img, {
                        selectable: 1,
                        scaleX: 90 / img.width,
                        scaleY: 90 / img.height
                    });
                    var imgInstance3 = new fabric.Image(img, {
                        selectable: 1,
                        scaleX: 90 / img.width,
                        scaleY: 90 / img.height
                    });
                    var imgInstance4 = new fabric.Image(img, {
                        selectable: 1,
                        scaleX: 90 / img.width,
                        scaleY: 90 / img.height
                    });
                    var imgInstance5 = new fabric.Image(img, {
                        selectable: 1,
                        scaleX: 90 / img.width,
                        scaleY: 90 / img.height
                    });
                   addImagesToCanvas(parent_element, imgInstance1, imgInstance2, imgInstance3, imgInstance4, imgInstance5);

               }else if(parent_element == "exercise"){
                 var imgInstance1 = new fabric.Image(img, {
                        selectable: 1,
                        scaleX: 90 / img.width,
                        scaleY: 90 / img.height
                    });
                   addImagesToCanvas(parent_element, imgInstance1);
               }else{
                    var imgInstance1 = new fabric.Image(img, {
                        selectable: 1,
                        scaleX: 90 / img.width,
                        scaleY: 90 / img.height
                    });
                    var imgInstance2 = new fabric.Image(img, {
                        selectable: 1,
                        scaleX: 90 / img.width,
                        scaleY: 90 / img.height
                    });
                    var imgInstance3 = new fabric.Image(img, {
                        selectable: 1,
                        scaleX: 90 / img.width,
                        scaleY: 90 / img.height
                    });
                    addImagesToCanvas(parent_element, imgInstance1, imgInstance2, imgInstance3);
               }
            }
            img.src = event.target.result;
            console.log(img);
        }
        reader.readAsDataURL(e.target.files[0]);
        this.value = "";
    });

    $(".lnkDownload").on("click", function(){
        var link = document.createElement('a');
        var value = $(this).attr("value");
        var images = createArrayLinks(value);
        var numMax = parseInt($(".max").val());
        var numMin = parseInt($(".min").val());
        var ite;
        var name = "", materia = "", nameFree="";
        link.setAttribute('download', "images");
        link.style.display = 'none';
        document.body.appendChild(link);

        var zip = new JSZip();
        var img = zip.folder("images");

        if(value === "save-read" && (numMax != numMin && numMax > numMin) && numberCanvas(numMax, numMin)){
            let canvas = $("#read").find("canvas.lower-canvas");
            var ids = [];
            ite = numMin;
            var iteCanvas = 0;
            canvas.each(function(index, elem){
                iteCanvas++;
                var idMod = $(elem).attr("id").replace(/\b\w/g, l => l.toUpperCase()).split("");
                idMod.pop();
                idMod[0].toUpperCase();
                idMod.unshift("T"+ite);
                console.log(idMod[0].toUpperCase());
                ids.push(idMod.join(""));
                if(iteCanvas % 3 == 0){
                  ite++;
                }
                if(ite > numMax){
                   ite = numMin;
                }
            });
             if($("#checkRead").is(':checked')){
                nameFree = $("#inputFreeRead").val();
                materia = ""
             }else{
                name = $("input[name=radio]:checked").attr("value");
                materia = $('select[ng-name="niveles"]').val();
                 materia += $('select[ng-name="grados"]').val();
                materia += $('select[ng-name="materias"]').val();
                materia += $('select[ng-name="bloques"]').val();
             }
            console.log(name);
        }else if( value === "save-exercise"){
            let canvas = $("#exercise").find("canvas.lower-canvas");
            var ids = [];
            canvas.each(function(index, elem){
                ids.push($(elem).attr("id").replace(/\b\w/g, l => l.toUpperCase()));
            });

            if($("#checkExercise").is(':checked')){
                nameFree = $("#inputFreeExercise").val();
                materia = ""
            }else{
                name = "EjeI";
                materia = $('select[ng-name="nivelesExercise"]').val();
                materia += $('select[ng-name="gradosExercise"]').val();
                materia += $('select[ng-name="materiasExercise"]').val();
                materia += $('select[ng-name="bloquesExercise"]').val();
            }
        }else if( value === "save-help"){
            let canvas = $("#help").find("canvas.lower-canvas");
            var ids = [];
            canvas.each(function(index, elem){
                ids.push($(elem).attr("id").replace(/\b\w/g, l => l.toUpperCase()));
            });
            if($("#checkHelp").is(':checked')){
                nameFree = $("#inputFreeHelp").val();
                materia = ""
            }else{
                name = "Ayu";
                materia = $('select[ng-name="nivelesHelp"]').val();
                materia += $('select[ng-name="gradosHelp"]').val();
                materia += $('select[ng-name="materiasHelp"]').val();
            }
        }

       if(ids.length > 0){
            for(var i = 1; i <= images.length; i++){
                img.file(materia+nameFree+ids[i - 1]+name+".png", images[i-1].split('base64,')[1], {base64: true});
            }
            zip.generateAsync({type:"blob"})
            .then(function(content) {
                // see FileSaver.js
                saveAs(content, value+".zip");
            });
            document.body.removeChild(link);
          }
    });

    var showModal = false;

    $(document).keydown((evt) =>{
        switch (evt.keyCode) {
            case 46: // delete
                if(showModal){
                    $('.modal').modal("show");
                    $(".modal").on('shown.bs.modal', function(event) {
                        $("#delete").focus();
                    });
                    showModal = false
                }
                break;
            case 13:
                if($("#delete").is(":focus")) {
                    $("#delete").click();
                    $('.modal').modal("hide");
                  }
                break;
        }
    });

    var canvasRemove;
    var canvasPopver;

    $(document).on("click", "#delete", function () {
        removeImageFromCanvas(canvasRemove);
        canvasRemove = "";
        $(this).popover("show");

    });


    $("canvas").on("dblclick", function () {
        canvasPopver = $(this).parent().parent();
        canvasRemove = $($(this).siblings()).attr("id");
        canvasPopver.popover("show");
        var timerPopover = setInterval(function () {
            canvasPopver.popover("hide");
            console.log("IN");
            clearInterval(timerPopover);
        }, 1500);
        showModal = true;
    });
});


function addImagesToCanvas(val, img1, img2, img3, img4, img5) {

    switch (val) {
        case "bloque1":
            glosario1.add(img1);
            glosario1.centerObject(img1);
            lectura1.add(img2);
            lectura1.centerObject(img2);
            examen1.add(img3);
            examen1.centerObject(img3);
            break;
        case "bloque2":
            glosario2.add(img1);
            glosario2.centerObject(img1);
            lectura2.add(img2);
            lectura2.centerObject(img2);
            examen2.add(img3);
            examen2.centerObject(img3);
            break;
        case "bloque3":
            glosario3.add(img1);
            glosario3.centerObject(img1);
            lectura3.add(img2);
            lectura3.centerObject(img2);
            examen3.add(img3);
            examen3.centerObject(img3);
            break;
        case "bloque4":
            glosario4.add(img1);
            glosario4.centerObject(img1);
            lectura4.add(img2);
            lectura4.centerObject(img2);
            examen4.add(img3);
            examen4.centerObject(img3);
            break;
        case "bloque5":
            glosario5.add(img1);
            glosario5.centerObject(img1);
            lectura5.add(img2);
            lectura5.centerObject(img2);
            examen5.add(img3);
            examen5.centerObject(img3);
            break;
        case "bloques":
            bloque1.add(img1);
            bloque1.centerObject(img1);
            bloque2.add(img2);
            bloque2.centerObject(img2);
            bloque3.add(img3);
            bloque3.centerObject(img3);
            bloque4.add(img4);
            bloque4.centerObject(img4);
            bloque5.add(img5);
            bloque5.centerObject(img5);
            break;
        case "exercise":
            exercise_canvas.add(img1);
            exercise_canvas.centerObject(img1);
    }
}

function removeImageFromCanvas(canvas) {

    switch (canvas) {
        case "examen1":
            examen1.remove(examen1.getActiveObject());
            break;
        case "examen2":
            examen2.remove(examen2.getActiveObject());
            break;
        case "examen3":
            examen3.remove(examen3.getActiveObject());
            break;
        case "examen4":
            examen4.remove(examen4.getActiveObject());
            break;
        case "examen5":
            examen5.remove(examen5.getActiveObject());
            break;
        case "lectura1":
            lectura1.remove(lectura1.getActiveObject());
            break;
        case "lectura2":
            lectura2.remove(lectura2.getActiveObject());
            break;
        case "lectura3":
            lectura3.remove(lectura3.getActiveObject());
            break;
        case "lectura4":
            lectura4.remove(lectura4.getActiveObject());
            break;
        case "lectura5":
            lectura5.remove(lectura5.getActiveObject());
            break;
        case "glosario1":
            glosario1.remove(glosario1.getActiveObject());
            break;
        case "glosario2":
            glosario2.remove(glosario2.getActiveObject());
            break;
        case "glosario3":
            glosario3.remove(glosario3.getActiveObject());
            break;
        case "glosario4":
            glosario4.remove(glosario4.getActiveObject());
            break;
        case "glosario5":
            glosario5.remove(glosario5.getActiveObject());
            break;
        case "bloque1":
            bloque1.remove(bloque1.getActiveObject());
            break;
        case "bloque2":
            bloque2.remove(bloque2.getActiveObject());
            break;
        case "bloque3":
            bloque3.remove(bloque3.getActiveObject());
            break;
        case "bloque4":
            bloque4.remove(bloque4.getActiveObject());
            break;
        case "bloque5":
            bloque5.remove(bloque5.getActiveObject());
            break;
        case "exercise_canvas":
            exercise_canvas.remove(exercise_canvas.getActiveObject());
    }
}

var zoomCanvas = (val) =>{

    mainCanvas.forEach(function(item){
        item.setZoom(val);
        item.setWidth(180 * item.getZoom());
        item.setHeight(180 * item.getZoom());
    });
}

var numberCanvas = (max, min) =>{
    var ite = 0;
    for(var i = min; i <= max; i++){
        ite++;
    }

    if(ite == 5){
        return true;
    }else{
        return false;
    }

}

function createArrayLinks(val){
    var images = [];

    if($(document).width() < 1280) {
      zoomCanvas(0.33);
    }else{
        zoomCanvas(0.5);
    }

    switch(val){
        case "save-read":
            images = [glosario1.toDataURL({
                        format: 'png',
                        quality: 0.8
                        }),
                        lectura1.toDataURL({
                        format: 'png',
                        quality: 0.8
                        }),
                        examen1.toDataURL({
                        format: 'png',
                        quality: 0.8
                        }),
                        glosario2.toDataURL({
                        format: 'png',
                        quality: 0.8
                    }),
                        lectura2.toDataURL({
                        format: 'png',
                        quality: 0.8
                    }),
                        examen2.toDataURL({
                        format: 'png',
                        quality: 0.8
                    }),
                        glosario3.toDataURL({
                        format: 'png',
                        quality: 0.8
                    }),
                        lectura3.toDataURL({
                        format: 'png',
                        quality: 0.8
                    }),
                        examen3.toDataURL({
                        format: 'png',
                        quality: 0.8
                    }),
                        glosario4.toDataURL({
                        format: 'png',
                        quality: 0.8
                    }),
                        lectura4.toDataURL({
                        format: 'png',
                        quality: 0.8
                    }),
                        examen4.toDataURL({
                        format: 'png',
                        quality: 0.8
                    }),
                        glosario5.toDataURL({
                        format: 'png',
                        quality: 0.8
                    }),
                        lectura5.toDataURL({
                        format: 'png',
                        quality: 0.8
                    }),
                        examen5.toDataURL({
                        format: 'png',
                        quality: 0.8
                    })];
            break;
        case "save-help":
            images = [bloque1.toDataURL({
                        format: 'png',
                        quality: 0.8
                        }),
                        bloque2.toDataURL({
                        format: 'png',
                        quality: 0.8
                    }),
                        bloque3.toDataURL({
                        format: 'png',
                        quality: 0.8
                    }),
                        bloque4.toDataURL({
                        format: 'png',
                        quality: 0.8
                    }),
                        bloque5.toDataURL({
                        format: 'png',
                        quality: 0.8
                    })];
            break;
        case "save-exercise":
            images = [exercise_canvas.toDataURL({
                        format: 'png',
                        quality: 0.8
                        })];
            break;
    }

    zoomCanvas(1)

    return images;
}

var loadImage = (info, level) =>{
  var level_color;
  switch(level) {
    case 1:
      level_color = 'rojo';
      break;
    case 2:
      level_color = 'azu';
      break;
    case 3:
      level_color = 'ama';
      break;
    case 4:
      level_color = 'mora';
      break;
    case 5:
      level_color = 'verd';
      break;
    case 6:
      level_color = 'nar';
      break;

  }

  if(info == "materiasRead"){
    for (var i = 0; i < 15; i++) {
      if(i < 5){
        mainCanvas[i].setBackgroundImage('img/levels_prim/penta_'+level_color+'.png', mainCanvas[i].renderAll.bind(mainCanvas[i]));
      }else if(i < 10) {
        mainCanvas[i].setBackgroundImage('img/levels_prim/circ_'+level_color+'.png', mainCanvas[i].renderAll.bind(mainCanvas[i]));
      }else{
        mainCanvas[i].setBackgroundImage('img/levels_prim/rombo_'+level_color+'.png', mainCanvas[i].renderAll.bind(mainCanvas[i]));
      }
    }
  }else if(info == 'materiasHelp'){
    for (var i = 15; i < 20; i++) {
      mainCanvas[i].setBackgroundImage('img/levels_prim/pentE_'+level_color+'.png', mainCanvas[i].renderAll.bind(mainCanvas[i]));
    }
  }

}
