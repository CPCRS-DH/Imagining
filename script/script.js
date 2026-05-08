const SceneView = await $arcgis.import("@arcgis/core/views/SceneView.js");
const WebScene = await $arcgis.import("@arcgis/core/WebScene.js");
const FeatureLayer = await $arcgis.import("@arcgis/core/layers/FeatureLayer.js");
const TileLayer = await $arcgis.import("@arcgis/core/layers/TileLayer.js");
const VectorTileLayer = await $arcgis.import("@arcgis/core/layers/VectorTileLayer.js");
const reactiveUtils = await $arcgis.import("@arcgis/core/core/reactiveUtils.js");
const Basemap = await $arcgis.import("@arcgis/core/Basemap.js");

/***Send images to modal and launch***/

$('.app-image').click(function (e) {
    let location = $(e.target).attr('src')
    let caption = $(e.target).attr('data-caption')
    $('#neatModalImg').attr('src', location);
    $('#img-modal').fadeIn(500);
    $('#img-caption').html(caption);
});

/***Send videos to modal and launch***/

// $('.caravan-video').click(function (e) {
//     let location = $(e.target).attr('src')
//     $('#neatModalVideo').attr('src', location);
//     $('#video-modal').fadeIn(500);
// });

/***Fade in Splash Screen on Load***/

function showDivInner() {
  $(".splash-inner").fadeIn(500);
}

$(document).ready(function(){
    $(".splash-container")
    .css("display", "flex")
    .hide()
    .fadeIn();
    setTimeout(showDivInner, 2000);
});

/***Close Splash Screen***/

$('.splash-btn').click(function () {
    $('.splash-container').fadeOut(700);
})

/***Close Filter Pane***/

$('#filter-close').click(function () {
    $('.filter-legend-container').fadeOut(700);
    $('.right-panel-btn-container').css('display', 'flex');
    $('.filter-btn').toggleClass('off'); 
})

/***Open Filter Pane***/

$('#filter-btn').click(function () {
    $('.filter-legend-container').fadeToggle(700);
    $('.filter-btn').toggleClass('off');

    //close all popups
    $('#city-card').fadeOut();
    $('#caravan-card').fadeOut();
    highlight?.remove();
})

/***Trigger Nav Modal***/

$('.logo-title img').click(function () {
  $('#nav-modal').fadeIn(500);
})

/***Trigger About Modal***/

$('.nav-item:nth-of-type(5)').click(function () {
  $('#about-modal').fadeIn(500);
})

/***About Modal Tabs***/

const tabs = document.querySelectorAll(".modal-tab");
const contents = document.querySelectorAll(".modal-tab-content");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = tab.dataset.tab;

    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");

    contents.forEach((content) => {
      content.classList.toggle("active", content.id === target);
    });
  });
});

/***Close all modals***/

$('#about-close, #nav-close, #img-close, #video-close, #transcript-close').click(function () {
    $('#img-modal').fadeOut(500);
    $('#video-modal').fadeOut(500);
    $('#about-modal').fadeOut(500);
    $('#transcript-modal').fadeOut(500);
    $('#nav-modal').fadeOut(500);
})

/***Open / Close side panel***/

$('#panel-btn').click(function(){
    $('.side-panel').toggleClass('on');
    $('#panel-btn').toggleClass('on');

    //close all popups
    $('#city-card').fadeOut();
    $('#caravan-card').fadeOut();
    highlight?.remove();
});

$('#panel-close').click(function(){
    $('.side-panel').removeClass('on');
    $('#panel-btn').toggleClass('on');
});

/***Open / Close about panel***/

$('#help-btn').click(function(){
    $('.help-panel').toggleClass('on');
    $('#help-btn').toggleClass('on');

    //close all popups
    $('#city-card').fadeOut();
    $('#caravan-card').fadeOut();
    highlight?.remove();
});

$('#help-close').click(function(){
    $('.help-panel').toggleClass('on');
    $('#help-btn').toggleClass('on');
});

/***Close popups***/

$('#city-close, #caravan-close' ).click(function(){
    $('#city-card').fadeOut();
    $('#caravan-card').fadeOut();
    highlight?.remove();
});


/***Start ArcGIS JS***/

// require(["esri/views/SceneView", "esri/WebScene", "esri/layers/FeatureLayer", "esri/layers/TileLayer", "esri/layers/VectorTileLayer", "esri/core/reactiveUtils", "esri/Basemap"], (SceneView, WebScene, FeatureLayer, TileLayer, VectorTileLayer, reactiveUtils, Basemap) => {

    /***Add Layers***/

    const caravanStops = new FeatureLayer({
      url: "https://services3.arcgis.com/9nfxWATFamVUTTGb/arcgis/rest/services/Caravan_Stops/FeatureServer",
      //maxScale: 0,
      popupEnabled: false,
      id: 'caravanStops',
      renderer: stopRendererSmall,
      outFields: ["*"],
      labelingInfo: null,
    });

    const caravanRoutes = new FeatureLayer({
      url: "https://services3.arcgis.com/9nfxWATFamVUTTGb/arcgis/rest/services/Caravan_Routes/FeatureServer",
      maxScale: 0,
      popupEnabled: false,
      id: 'caravanRoutes',
      outFields: ["*"],
      renderer: routeRendererLarge
    });

    /***Basemap Layers***/

    const vectorTileLayer = new VectorTileLayer({
        portalItem: {
          id: "5e9f2604139f4a9e87999147cdf11eda", // Custom CRMP Basemap
        },
        opacity: 0.75,
      });

    const hillshadeTileLayer = new TileLayer({
      portalItem: {
        id: "1b243539f4514b6ba35e7d995890db1d", // World Hillshade
      },
    });

    const customBasemap = new Basemap({ baseLayers: [hillshadeTileLayer, vectorTileLayer] });

    /***Create Map and SceneView***/

    const map = new WebScene({
        //basemap: "topo-3d",
        basemap: customBasemap,
        ground: "world-elevation",
        layers: [caravanRoutes, caravanStops]
    });

    //map.ground.opacity = 1;

    const view = new SceneView({
        container: "viewDiv",
        map: map,
        qualityProfile: "high",
        highlights: [
          {name: "notable", color: "#ff1303", haloColor: "#ff1303", haloOpacity: 1, fillOpacity: 0, shadowOpacity: 0.1},
          {name: "custom", color: "#649b92", haloColor: "#649b92", haloOpacity: 0.9, fillOpacity: 0.5, shadowOpacity: 0.2}
        ],
        environment: {
          background:{
              type: "color", 
              color: [244, 245, 240, 1]
          },
          atmosphereEnabled: false,
          starsEnabled: false
        },
        constraints: {
          altitude: {
            min: 30000,
            max: 8000000
          }
        },
        camera: {
          position: {
            // spatialReference: {
            //   latestWkid: 3857,
            //   wkid: 2857
            // },
            x: -97.3497654896104,
            y: 38.938391919294915,
            z: 7783963.6349063385
          },
          heading: 359.627264859108,
          tilt: 0.22518567955045343
        },
        ui: {
            components: []
        },
        viewingMode: "global"
    });

    /***Custom Zoom In/Out Buttons***/

    function changeZoom(delta) {
      const camera = view.camera.clone();
      const scale = delta > 0 ? 0.7 : 1.3;
      const newPos = camera.position.clone();
      newPos.x = (newPos.x - view.center.x) * scale + view.center.x;
      newPos.y = (newPos.y - view.center.y) * scale + view.center.y;
      newPos.z = (newPos.z - view.center.z) * scale + view.center.z;
      
      camera.position = newPos;
      view.goTo(camera, { duration: 500, easing: "ease-in-out" });
    }

    document.getElementById("zoom-in-btn").addEventListener("click", () => {
      changeZoom(1);
    });

    document.getElementById("zoom-out-btn").addEventListener("click", () => {
      changeZoom(-1);
    });

    /***Start HitTest Cursor Pointer Functionality***/

    view.on("pointer-move", (event) => {
      const opts = {
        include: [caravanStops, caravanRoutes]
      }
      view.hitTest(event, opts).then((response) => {
        if (response.results.length) {
          document.getElementById("viewDiv").style.cursor = "pointer";
        } else {
          document.getElementById("viewDiv").style.cursor = "default";
        }
      });
    });

    /***Start Popup HitTest Functionality***/

    //City popup image/text selectors

    let cityImg = document.getElementById('city-popup-image-id');
    let cityVideo = document.querySelector('.city-video');
    let caravan = document.querySelector('.caravan')
    let cityStateDate = document.querySelector('.city-state-date');
    let details = document.querySelector('.details');

    //Caravan route popup image/text selectors

    // let imgUrlTwo = document.getElementById('caravan-popup-image-id');
    let caravanInfo = document.querySelector('.caravan-info');
    let caravanNum = document.querySelector('.caravan-number');
    let caravanImg = document.getElementById('caravan-popup-image-id');
    let caravanVideo = document.querySelector('.caravan-video');

    //Create highlight variable

    let highlight;

    view.on("immediate-click", (event) => {
      view.hitTest(event).then((hitResult) => {
    
        if (hitResult.results.length > 0 && hitResult.results[0].graphic.layer.id == "caravanStops") {

          const number = hitResult.results[0].graphic.attributes.CaravanNumber;
          const stop = hitResult.results[0].graphic.attributes.CaravanStop;
          const carName = hitResult.results[0].graphic.attributes.CaravanName;
          const carCity = hitResult.results[0].graphic.attributes.City;
          const carState = hitResult.results[0].graphic.attributes.State;
          const carDate = hitResult.results[0].graphic.attributes.Date;
          const carDetails = hitResult.results[0].graphic.attributes.Details;

          caravan.innerHTML = carName;
          cityStateDate.innerHTML = `${carCity}, ${carState} (${carDate})`;
          details.innerHTML = carDetails;

          $('#city-card').fadeIn();
          $('#caravan-card').fadeOut();

          // Ensure original popup width

          $('.popup').css('width', '31rem');

          // Close all side & filter panels

          $('.side-panel').removeClass('on');
          $('#panel-btn').removeClass('on');

          $('.help-panel').removeClass('on');
          $('#help-btn').removeClass('on');

          $('.filter-legend-container').fadeOut(700);
          $('.right-panel-btn-container').css('display', 'flex');
          $('.filter-btn').addClass('off');
          
          // Caravan One Media

          const caravanOneVideoOne = "https://resurrectioncity.penndigitalscholarship.org/Memphis_Buses_Clip_2.mp4";
          const caravanOneVideoTwo = "https://resurrectioncity.penndigitalscholarship.org/Marks_MS_Clip_1.mp4";

          // Caravan Two Media
          
          const caravanTwoVideo = "https://resurrectioncity.penndigitalscholarship.org/Marks_MS_Clip_1.mp4";
          const caravanTwoImageOne = "./assets/images/Atkins_Mule_Train.JPG";
          const caravanTwoImageTwo = "./assets/images/DCPL_Poor_Peoples_Campaign_Mule_Trains_Virginia_002.jpg";

          // Caravan Three Media

          const caravanThreeVideoOne = "https://resurrectioncity.penndigitalscholarship.org/Memphis_Buses_Clip_2.mp4";
          const caravanThreeVideoTwo = "https://resurrectioncity.penndigitalscholarship.org/Marks_MS_Clip_1.mp4";

          // Caravan Four Media

          const caravanFourVideo = "https://resurrectioncity.penndigitalscholarship.org/Southern_Caravan_Clip_3.mp4";
          
          // Caravan Six Media 
          const caravanSixVideo = "https://resurrectioncity.penndigitalscholarship.org/Northern_Caravan_Clip_4.mp4";
          const caravanSixImage = "./assets/images/Globe_Caravan_Article.png";

          // All Other Media

          const caravanAllImage = "./assets/images/SCLCcover.jpg";

          if(number === 1 && stop === 1) {
            cityImg.classList.add('toggle');
            cityVideo.classList.remove('toggle');
            $('.popup').css('width', '45rem');
            cityVideo.src = `${caravanOneVideoOne}`
          } else if (number === 2 && [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 24].includes(stop)) {
            cityVideo.classList.add('toggle');
            cityImg.classList.remove('toggle');
            $('.popup').css('width', '31rem');
            cityImg.src = `${caravanTwoImageOne}`
          } else if (number === 2 && stop === 1) {
            cityImg.classList.add('toggle');
            cityVideo.classList.remove('toggle');
            $('.popup').css('width', '45rem');
            cityVideo.src = `${caravanTwoVideo}`
          } else if (number === 2 && stop === 23) {
            cityVideo.classList.add('toggle');
            cityImg.classList.remove('toggle');
            $('.popup').css('width', '31rem');
            cityImg.src = `${caravanTwoImageTwo}`
          } else if (number === 3 && stop === 1) {
            cityImg.classList.add('toggle');
            cityVideo.classList.remove('toggle');
            $('.popup').css('width', '45rem');
            cityVideo.src = `${caravanThreeVideoOne}`
          } else if (number === 3 && stop === 2) {
            cityImg.classList.add('toggle');
            cityVideo.classList.remove('toggle');
            $('.popup').css('width', '45rem');
            cityVideo.src = `${caravanThreeVideoTwo}`
          } else if (number === 4) {
            cityImg.classList.add('toggle');
            cityVideo.classList.remove('toggle');
            $('.popup').css('width', '45rem');
            cityVideo.src = `${caravanFourVideo}`
          } else if (number === 6 && stop === 2) {
            cityVideo.classList.add('toggle');
            cityImg.classList.remove('toggle');
            $('.popup').css('width', '31rem');
            cityImg.src = `${caravanSixImage}`
          } else if (number === 6 && [1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].includes(stop)) {
            cityImg.classList.add('toggle');
            cityVideo.classList.remove('toggle');
            $('.popup').css('width', '45rem');
            cityVideo.src = `${caravanSixVideo}`
          } else {
            cityVideo.classList.add('toggle');
            cityImg.classList.remove('toggle');
            $('.popup').css('width', '31rem');
            cityImg.src = `${caravanAllImage}`
          }

          //End Temp image functionality//
          
          //Add highlight functionality//

          let result = hitResult.results[0].graphic;

          view.whenLayerView(result.layer).then((layerView) => {
              highlight?.remove();
              highlight = layerView.highlight(result, { name: "custom"});
          });


        } else if (hitResult.results.length > 0 && hitResult.results[0].graphic.layer.id == "caravanRoutes") {

          const carNumber = hitResult.results[0].graphic.attributes.CarNum;
          const carName = hitResult.results[0].graphic.attributes.CarNam1;
          const carNameTwo = hitResult.results[0].graphic.attributes.CarNam2;

          caravanInfo.innerHTML = `Caravan Number ${carNumber}`;
          caravanNum.innerHTML = `${carName} (${carNameTwo})`;

          $('#city-card').fadeOut();
          $('#caravan-card').fadeIn();

          // Close all side & filter panels

          $('.side-panel').removeClass('on');
          $('#panel-btn').removeClass('on');

          $('.help-panel').removeClass('on');
          $('#help-btn').removeClass('on');

          $('.filter-legend-container').fadeOut(700);
          $('.right-panel-btn-container').css('display', 'flex');
          $('.filter-btn').addClass('off');
            
          //Dynamically Add Image or Video to Popup//

          const caravanVideoOne = "https://resurrectioncity.penndigitalscholarship.org/Caravan1_PopupVideo.mp4";
          const caravanImage = "./assets/images/SCLCcover.jpg"
          const caravanVideoFour = "https://resurrectioncity.penndigitalscholarship.org/Caravan4_PopupVideo.mp4";
          
          console.log(carNumber);

          if(carNumber == 1) {
            caravanImg.classList.add('toggle');
            caravanVideo.classList.remove('toggle');
            $('.popup').css('width', '45rem');
            caravanVideo.src = `${caravanVideoOne}` 
          } else if (carNumber == 4) {
            caravanImg.classList.add('toggle');
            caravanVideo.classList.remove('toggle');
            $('.popup').css('width', '45rem');
            caravanVideo.src = `${caravanVideoFour}`
          } else {
            caravanImg.src = `${caravanImage}`
            caravanVideo.classList.add('toggle');
            caravanImg.classList.remove('toggle');
            $('.popup').css('width', '31rem');
          }

          //End Dynamically Add Image or Video to Popup//

          //Add highlight functionality//

          let result = hitResult.results[0].graphic;

          view.whenLayerView(result.layer).then((layerView) => {
              highlight?.remove();
              highlight = layerView.highlight(result, { name: "custom"});
          });

        } else {

          $('#city-card').fadeOut();
          $('#caravan-card').fadeOut();
          highlight?.remove();
          
        };
      })
    });

    /***End Start Popup HitTest Functionality***/

    /***Add Highlight for Selected Caravan Routes***/

    // const specificIds = [2];
    // let highlightHandle;

    // view.whenLayerView(caravanRoutes).then((layerViewHighlight) => {
    //   highlightHandle = layerViewHighlight.highlight(specificIds, { name: "notable"});
    // });

    /***Filter Functionality */

    let newValue;

    const filterSelect = document.getElementById("caravan-filter");
    const timelines = document.querySelectorAll('.timeline-container');
    const routes = document.querySelectorAll('.route-container');

    function zoomToLayer(layer) {
      return layer.queryExtent().then((response) => {
        let extent = response.extent.clone();

        // Expand the extent by a factor (e.g., 1.2 = zoom out slightly)
        extent = extent.expand(1.4); // Expand 20%
        view.goTo(
            {
              target: extent
            },
            {
              duration: 1500,
              easing: "linear"
          }).catch((error) => {
          console.error(error);
        });
      });
    }

    function setDefinition() {
      caravanStops.definitionExpression = `(CaravanNumber='${newValue}')`;
      caravanRoutes.definitionExpression = `(CarNum='${newValue}')`;
    }
        
    filterSelect.addEventListener("change", function(event) {
      newValue = event.target.value;
      //Remove active class from timeline 'li' elements
      lists.forEach((list) => list.classList.remove("active"));

      if (newValue != 0) {
        setDefinition();
        highlightSelect?.remove();
        zoomToLayer(caravanRoutes);
      } else {
        caravanStops.definitionExpression = null;
        caravanRoutes.definitionExpression = null;
        highlightSelect?.remove();
        view.goTo({
          position: {
            x: -97.3497654896104,
            y: 38.938391919294915,
            z: 7783963.6349063385
          },
          heading: 359.627264859108,
          tilt: 0.22518567955045343
        }, {
          duration: 1500,
          easing: "linear"
        });
      }

      //Show correct timeline after filter

      timelines.forEach((timeline, i) => {
        if (i === newValue - 1) {
          timeline.classList.add('show');
        } else {
          timeline.classList.remove('show');
        }
      });

      //Hide / Reveal Legend items after filter

      routes.forEach((route, i) => {
        if (newValue <= 0) {
          route.classList.remove('hide');
        } else if (i === newValue - 1) {
          route.classList.remove('hide');
        } else {
          route.classList.add('hide');
        }
      });
      
    });

    /***End Filter Functionality */

    /***Reset Filter Button***/

    const filterReset = document.getElementById('filter-reset-btn');

    filterReset.addEventListener('click', ()=> {
        filterSelect.selectedIndex = 0;
        caravanStops.definitionExpression = null;
        caravanRoutes.definitionExpression = null;
        highlightSelect?.remove();
        view.goTo({
          position: {
            x: -97.3497654896104,
            y: 38.938391919294915,
            z: 7783963.6349063385
          },
          heading: 359.627264859108,
          tilt: 0.22518567955045343
        }, {
          duration: 1500,
          easing: "linear"
        });

        timelines.forEach((timeline) => {
            timeline.classList.remove('show');
        });

        routes.forEach((route) => {
            route.classList.remove('hide');
        });
    });

    /***End Reset Filter Button***/

    /***Timeline Functionality***/

    let highlightSelect;
    const lists = document.querySelectorAll(".timeline li");

    map.when(() => {
      view.whenLayerView(caravanStops).then((layerView) => {
        const queryCities = caravanStops.createQuery();

        for (let i = 0, li = null; (li = lists[i]); i++) {
          li.addEventListener('click', onClick);
        }

        /*Timeline Highlight*/

        function onClick(event) {
            let target = event.target;

            const li = target.closest("li");
            if (!li) return;

            highlight?.remove();

            lists.forEach((list) => list.classList.remove("active"));
            li.classList.add("active");

            // const firstSpan = li.querySelector("span:first-of-type");
            const firstSpan = li.querySelector("span:nth-of-type(2)");
            if (!firstSpan) return;

            const cityName = firstSpan.innerText;

            queryCities.where = `City='${cityName}' AND CaravanNumber = ${newValue}`;

            caravanStops.queryFeatures(queryCities).then((result) => {
              if (highlightSelect) {
                highlightSelect.remove();
              }

              const feature = result.features[0];

              highlightSelect = layerView.highlight(feature.attributes["OBJECTID"], {
                name: "custom"
              });

              view.goTo(
                {
                  target: feature.geometry,
                  tilt: 0,
                  zoom: 10
                },
                {
                  duration: 1250,
                  easing: "linear"
                }
              ).catch((error) => {
                if (error.name !== "AbortError") {
                  console.error(error);
                }
              });
            });
          };
        });
    });

    /***End Timeline Functionality***/

    /***Scale-based Renderer***/

    reactiveUtils.watch(
      () => view.scale,
      (scale) => {
        caravanRoutes.renderer = scale <= 4000000 ? routeRendererMedium : routeRendererLarge;
        caravanStops.renderer = scale >= 4000000 ? stopRendererSmall : stopRendererLarge;
        caravanStops.labelingInfo = scale <= 5000000 ? labelClass : null;
      }
    );

    /***End Scale-based Renderer***/

// });