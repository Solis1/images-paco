$(document).ready(()=>{
  var user = "";
  var anwsersCorrectly = 0;

  if(localStorage['user'] != null){
      if(localStorage['grade'] != null){
        $("main").prepend("<div id='message-user' class='alert alert-info'>¡¡Buena Suerte "+localStorage['user']+"!! La ultima vez obtuviste "+localStorage['grade']+"/5</div>");
      }else{
        $("main").prepend("<div id='message-user' class='alert alert-info'>¡¡Buena Suerte "+localStorage['user']+"!!</div>");
      }
  }else{
    bootbox.prompt("Hola, bienvenido a nuestro examen de <code>Varias Cosas</code>. ¿Cual es tu nombre?", (result)=>{
      user = result;
      localStorage['user'] = user;
      $("main").prepend("<div id='message-user' class='alert alert-info'>¡¡Buena Suerte "+user+"!!</div>")
    })
  }
  Survey.Survey.cssType = "bootstrap";
  Survey.defaultBootstrapCss.navigationButton = "btn btn-success";

  var MyTextValidator = (function (_super) {
        Survey.__extends(MyTextValidator, _super);
        function MyTextValidator() {
            _super.call(this);
        }
        MyTextValidator.prototype.getType = function () {
            return "mytextvalidator";
        };
        MyTextValidator.prototype.validate = function (value, name) {
            if (value == "miguel hidalgo") {
              anwsersCorrectly++
              return null;
            }
            return new Survey.ValidatorResult(null, new Survey.CustomError(this.getErrorText(name)));
        };
        MyTextValidator.prototype.getDefaultErrorText = function (name) {
            return "El padre de la patria es miguel hidalgo.";
        };
        return MyTextValidator;
    })(Survey.SurveyValidator);
    Survey.MyTextValidator = MyTextValidator;

  Survey.JsonObject.metaData.addClass("mytextvalidator", [], function () {
          return new MyTextValidator();
      }, "surveyvalidator");

  var YearValidator = (function (_super) {
        Survey.__extends(YearValidator, _super);
        function YearValidator() {
            _super.call(this);
        }
        YearValidator.prototype.getType = function () {
            return "mytextvalidator";
        };
        YearValidator.prototype.validate = function (value, name) {
            if (value == 10) {
                anwsersCorrectly++
                return null;
            }
            return new Survey.ValidatorResult(null, new Survey.CustomError(this.getErrorText(name)));
        };
        YearValidator.prototype.getDefaultErrorText = function (name) {
            return "La respuesta correcta es 10.";
        };
        return YearValidator;
    })(Survey.SurveyValidator);
    Survey.MyTextValidator = YearValidator;

  Survey.JsonObject.metaData.addClass("yearvalidator", [], function () {
          return new YearValidator();
      }, "surveyvalidator");

  var CitiesValidator = (function (_super) {
        Survey.__extends(CitiesValidator, _super);
        function CitiesValidator() {
            _super.call(this);
        }
        CitiesValidator.prototype.getType = function () {
            return "citiesvalidator";
        };
        CitiesValidator.prototype.validate = function (value, name) {
            if (value.length == 3 && value.includes("México") && value.includes("Estados Unidos") && value.includes("Canadá")) {
                anwsersCorrectly++
                return null;
            }
            return new Survey.ValidatorResult(null, new Survey.CustomError(this.getErrorText(name)));
        };
        CitiesValidator.prototype.getDefaultErrorText = function (name) {
            return "Los paises de Norteamerica son Canadá, Estados Unidos y México.";
        }
        return CitiesValidator;
    })(Survey.SurveyValidator);
    Survey.CitiesValidator = CitiesValidator;

  Survey.JsonObject.metaData.addClass("citiesvalidator", [], function () {
          return new CitiesValidator();
      }, "surveyvalidator");

  var RightsValidator = (function (_super) {
        Survey.__extends(RightsValidator, _super);
        function RightsValidator() {
            _super.call(this);
        }
        RightsValidator.prototype.getType = function () {
            return "rightsvalidator";
        };
        RightsValidator.prototype.validate = function (value, name) {
          console.log(value);
            if (value.length == 2 && value.includes("Derecho de prioridad") && value.includes("Derecho a no ser discriminado")) {
                anwsersCorrectly++
                return null;
            }
            return new Survey.ValidatorResult(null, new Survey.CustomError(this.getErrorText(name)));
        };
        RightsValidator.prototype.getDefaultErrorText = function (name) {
            return "Los derechos correctos son de prioridad y a no ser discriminado.";
        };
        return RightsValidator;
    })(Survey.SurveyValidator);
    Survey.CitiesValidator = RightsValidator;

  Survey.JsonObject.metaData.addClass("rightsvalidator", [], function () {
          return new RightsValidator();
      }, "surveyvalidator");

  var ImgValidator = (function (_super) {
        Survey.__extends(ImgValidator, _super);
        function ImgValidator() {
            _super.call(this);
        }
        ImgValidator.prototype.getType = function () {
            return "imgvalidator";
        };
        ImgValidator.prototype.validate = function (value, name) {
            if (value == "lion") {
                anwsersCorrectly++
                return null;
            }
            return new Survey.ValidatorResult(null, new Survey.CustomError(this.getErrorText(name)));
        };
        ImgValidator.prototype.getDefaultErrorText = function (name) {
            return "La imagen corecta es la del León.";
        };
        return ImgValidator;
    })(Survey.SurveyValidator);
    Survey.CitiesValidator = ImgValidator;

  Survey.JsonObject.metaData.addClass("imgvalidator", [], function () {
          return new ImgValidator();
      }, "surveyvalidator");

    var jsonTags = {
        "elements": [
            {
                "type": "tagbox",
                "isRequired": true,
                "requiredErrorText": "Por favor responda la pregunta.",
                "choicesByUrl": {
                  "url": "https://restcountries.eu/rest/v1/all",
                  "valueName": "translations.es"
                },
                "name": "countries",
                "title": "Selecciona los países que conforman Norteamérica.",
                "description": "Es un subcontinente del continente americano y considerado solo por los angloparlantes, por la diferencia cultural y geológica (cratones) un continente del supercontinente de América. Yace en el hemisferio norte y casi por completo en el hemisferio occidental y limita al norte con el océano Ártico, al este con el océano Atlántico, al sureste con el mar Caribe y al suroeste con el océano Pacífico.",
                "validators": [
                    {
                        type: "citiesvalidator"
                    }
                ]
            },
            {
                "type": "nouislider",
                "isRequired": true,
                "requiredErrorText": "Por favor responda la pregunta.",
                "name": "range",
                "title": "¿Cuántos años tiene una década?",
                "description": "Una década es menor a 50 y mayor a 5.",
                "validators": [
                    {
                        type: "yearvalidator"
                    }
                ]
            },
            {
                "type": "sortablelist",
                "isRequired": true,
                "requiredErrorText": "Por favor responda la pregunta.",
                "name": "lifepriopity",
                "title": "Derechos de los niños:",
                "description": "Los derechos del niño son un conjunto de normas jurídicas que protegen a las personas hasta cierta edad. Todos y cada uno de los derechos de la infancia son inalienables e irrenunciables, por lo que ninguna persona puede vulnerarlos o desconocerlos bajo ninguna circunstancia.",
                "validators": [
                    {
                        type: "rightsvalidator"
                    }
                ],
                "isRequired": true,
                "choices": ["Derecho de prioridad", "Derecho a matar", "Derecho a ser golpeado", "Derecho a ser explotado", "Derecho a no ser discriminado"]
            },
            {
                "type": "imagepicker",
                "isRequired": true,
                "requiredErrorText": "Por favor responda la pregunta.",
                "name": "choosepicture",
                "title": "Elige al animal de la familia de los Felinos",
                "description": "Son una familia de mamíferos placentarios del orden Carnivora. Poseen un cuerpo esbelto, oído agudo, hocico corto y excelente vista. Son los mamíferos cazadores más sigilosos. La mayoría consume exclusivamente carne e ignora cualquier otra comida que no sea una presa viva.",
                "validators": [
                    {
                        type: "imgvalidator"
                    }
                ],
                "choices": [
                    {
                        "value": "lion",
                        "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg"
                    }, {
                        "value": "giraffe",
                        "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg"
                    }, {
                        "value": "panda",
                        "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg"
                    }, {
                        "value": "camel",
                        "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg"
                    }
                ]
            },
            {
                "type": "comment",
                "name": "memo",
                "isRequired": true,
                "requiredErrorText": "Por favor responda la pregunta.",
                "title": "¿Quién es el padre de la patria? (Escribe en minúsculas) ",
                "description": "Suele ser un líder considerado clave, cuya biografía se mitifica para convertirla en fuente de inspiración patriótica, intensificando sus rasgos simbólicos, heroicos y de autoridad, tanto política como moral. Su imagen es utilizada como símbolo nacional, mostrándose en monumentos, monedas, billetes, sellos, carteles, etc.",
                "validators": [
                    {
                        type: "mytextvalidator"
                    }
                ]
            }
        ],
        completedHtml: "<h4>Gracias por tus respuesta!</h4>"
    };

    window.surveyTags = new Survey.Model(jsonTags);

    surveyTags.data = {
        countries: ['México']
    };

    surveyTags.onComplete.add(function (result) {
          $("#message-user").hide();
          localStorage['grade'] = anwsersCorrectly;
          $('#surveyResultTags').text(user+" tuviste estas respuestas correctas: "+anwsersCorrectly);
    });


    $("#surveyTags").Survey({model: surveyTags});
    $(".btn.btn-success.sv_complete_btn").attr("value", "Revisar");
    $($("#sq_102").find("span")[2]).text("Mueve aqui los elementos.");
});
