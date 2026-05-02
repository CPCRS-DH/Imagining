const routeRendererMedium = {
  type: "unique-value",
  field: "CarNum",
  defaultSymbol: {
    type: "line-3d"
  },
  uniqueValueInfos: [
    {
      value: 1,
      symbol: {
        type: "line-3d",
        symbolLayers: [
          {
            type: "line", 
            material: {
              color: [255, 255, 255, 1]
            },
            size: "5px"
          },
          {
            type: "line", 
            material: {
              color: "#616161"
            },
            size: "4px",
            pattern: {
              type: "style",
              style: "short-dot"
            },
            marker: {
              type: "style",
              style: "arrow",
              placement: "end"
            }
          }
        ]
      }
    },
    {
      value: 2,
      symbol: {
        type: "line-3d",
        symbolLayers: [
          {
            type: "line", 
            material: {
              color: [255, 255, 255, 0.4]
            },
            size: "6px"
          },
          {
            type: "line", 
            material: {
              color: "#f70707"
            },
            size: "4px",
            pattern: {
              type: "style",
              style: "short-dot"
            },
            marker: {
              type: "style",
              style: "arrow",
              placement: "end"
            }
          }
        ]
      }
    },
    {
      value: 3,
      symbol: {
        type: "line-3d",
        symbolLayers: [
          {
            type: "line", 
            material: {
              color: [255, 255, 255, 0.4]
            },
            size: "6px"
          },
          {
            type: "line", 
            material: {
              color: "#f789d8"
            },
            size: "4px",
            pattern: {
              type: "style",
              style: "short-dot"
            },
            marker: {
              type: "style",
              style: "arrow",
              placement: "end"
            }
          }
        ]
      }
    },
    {
      value: 4,
      symbol: {
        type: "line-3d",
        symbolLayers: [
          {
            type: "line", 
            material: {
              color: [255, 255, 255, 0.4]
            },
            size: "6px"
          },
          {
            type: "line", 
            material: {
              color: "#545454"
            },
            size: "4px",
            pattern: {
              type: "style",
              style: "short-dot"
            },
            marker: {
              type: "style",
              style: "arrow",
              placement: "end"
            }
          }
        ]
      }
    },
    {
      value: 5,
      symbol: {
        type: "line-3d",
        symbolLayers: [
          {
            type: "line", 
            material: {
              color: [255, 255, 255, 0.4]
            },
            size: "6px"
          },
          {
            type: "line", 
            material: {
              color: "#0300b5"
            },
            size: "4px",
            pattern: {
              type: "style",
              style: "short-dot"
            },
            marker: {
              type: "style",
              style: "arrow",
              placement: "end"
            }
          }
        ]
      }
    },
    {
      value: 6,
      symbol: {
        type: "line-3d",
        symbolLayers: [
          {
            type: "line", 
            material: {
              color: [255, 255, 255, 0.4]
            },
            size: "6px"
          },
          {
            type: "line", 
            material: {
              color: "#00a120"
            },
            size: "4px",
            pattern: {
              type: "style",
              style: "short-dot"
            },
            marker: {
              type: "style",
              style: "arrow",
              placement: "end"
            }
          }
        ]
      }
    },
    {
      value: 7,
      symbol: {
        type: "line-3d",
        symbolLayers: [
          {
            type: "line", 
            material: {
              color: [255, 255, 255, 0.4]
            },
            size: "6px"
          },
          {
            type: "line", 
            material: {
              color: "#36b8c4"
            },
            size: "4px",
            pattern: {
              type: "style",
              style: "short-dot"
            },
            marker: {
              type: "style",
              style: "arrow",
              placement: "end"
            }
          }
        ]
      }
    },
    {
      value: 8,
      symbol: {
        type: "line-3d",
        symbolLayers: [
          {
            type: "line", 
            material: {
              color: [255, 255, 255, 0.4]
            },
            size: "6px"
          },
          {
            type: "line", 
            material: {
              color: "#ffde3e"
            },
            size: "4px",
            pattern: {
              type: "style",
              style: "short-dot"
            },
            marker: {
              type: "style",
              style: "arrow",
              placement: "end"
            }
          }
        ]
      }
    },
    {
      value: 9,
      symbol: {
        type: "line-3d",
        symbolLayers: [
          {
            type: "line", 
            material: {
              color: [255, 255, 255, 0.4]
            },
            size: "6px"
          },
          {
            type: "line", 
            material: {
              color: "#fc9630"
            },
            size: "4px",
            pattern: {
              type: "style",
              style: "short-dot"
            },
            marker: {
              type: "style",
              style: "arrow",
              placement: "end"
            }
          }
        ]
      }
    }
  ]
}

const colors = ["#616161", "#f70707", "#f789d8", "#545454", "#0300b5", "#00a120", "#36b8c4", "#ffde3e", "#fc9630"];

const commonProperties = {
  type: "simple-line",
  width: "3px",
  style: "short-dot"
};

// Symbol for Caravan Route One
const oneSym = {
  ...commonProperties,
  color: colors[0]
};

// Symbol for Caravan Route Two
const twoSym = {
  ...commonProperties,
  color: colors[1]
};

// Symbol for Caravan Route Three
const threeSym = {
  ...commonProperties,
  color: colors[2]
};

// Symbol for Caravan Route Four
const fourSym = {
  ...commonProperties,
  color: colors[3]
};

// Symbol for Caravan Route Five
const fiveSym = {
  ...commonProperties,
  color: colors[4]
};

// Symbol for Caravan Route Six
const sixSym = {
  ...commonProperties,
  color: colors[5]
};

// Symbol for Caravan Route Seven
const sevenSym = {
  ...commonProperties,
  color: colors[6]
};

// Symbol for Caravan Route Eight
const eightSym = {
  ...commonProperties,
  color: colors[7]
};

// Symbol for Caravan Route Nine
const nineSym = {
  ...commonProperties,
  color: colors[8]
};

// Symbol for Other
const otherSym = {
  ...commonProperties,
  color: colors[9]
};


const routeRendererLarge = {
  type: "unique-value",
  defaultSymbol: otherSym,
  field: "CarNum",

  uniqueValueInfos: [
    {
      value: 1,
      symbol: oneSym,
      //label: "Route One"
    },
    {
      value: 2,
      symbol: twoSym,
    },
    {
      value: 3,
      symbol: threeSym,
    },
    {
      value: 4,
      symbol: fourSym,
    },
    {
      value: 5,
      symbol: fiveSym,
    },
    {
      value: 6,
      symbol: sixSym,
    },
    {
      value: 7,
      symbol: sevenSym,
    },
    {
      value: 8,
      symbol: eightSym,
    },
    {
      value: 9,
      symbol: nineSym,
    }
  ]

};

/***Caravan Stop Renderer Small***/

const commonStopProperties = {
  type: "simple-marker",
  style: "circle",
  size: "12px",
  outline: {
    color: [ 64, 46, 50 ],
    width: 1.5
  }
};

// Symbol for Caravan Stop One
const oneSymStop = {
  ...commonStopProperties,
  color: colors[0]
};

// Symbol for Caravan Stop Two
const twoSymStop = {
  ...commonStopProperties,
  color: colors[1]
};

// Symbol for Caravan Stop Three
const threeSymStop = {
  ...commonStopProperties,
  color: colors[2]
};

// Symbol for Caravan Stop Four
const fourSymStop = {
  ...commonStopProperties,
  color: colors[3]
};

// Symbol for Caravan Stop Five
const fiveSymStop = {
  ...commonStopProperties,
  color: colors[4]
};

// Symbol for Caravan Stop Six
const sixSymStop = {
  ...commonStopProperties,
  color: colors[5]
};

// Symbol for Caravan Stop Seven
const sevenSymStop = {
  ...commonStopProperties,
  color: colors[6]
};

// Symbol for Caravan Stop Eight
const eightSymStop = {
  ...commonStopProperties,
  color: colors[7]
};

// Symbol for Caravan Stop Nine
const nineSymStop = {
  ...commonStopProperties,
  color: colors[8]
};

// Symbol for Other
const otherSymStop = {
  ...commonStopProperties,
  color: colors[9]
};

const stopRendererSmall = {
  type: "unique-value",
  // legendOptions: {
  //   title: "Stop type"
  // },
  defaultSymbol: otherSym,
  //defaultLabel: "Other",
  field: "CaravanNumber",

  uniqueValueInfos: [
    {
      value: 1,
      symbol: oneSymStop,
      //label: "Route One"
    },
    {
      value: 2,
      symbol: twoSymStop,
    },
    {
      value: 3,
      symbol: threeSymStop,
    },
    {
      value: 4,
      symbol: fourSymStop,
    },
    {
      value: 5,
      symbol: fiveSymStop,
    },
    {
      value: 6,
      symbol: sixSymStop,
    },
    {
      value: 7,
      symbol: sevenSymStop,
    },
    {
      value: 8,
      symbol: eightSymStop,
    },
    {
      value: 9,
      symbol: nineSymStop,
    }
  ]

};


/***Caravan Stop Renderer Large***/

const verticalOffsetTwo = {
  screenLength: 600,
  maxWorldLength: 5000,
  minWorldLength: 1000,
};

function getSiteColor(icon) {
  return {
    type: "point-3d",
    symbolLayers: [
      {
        type: "icon",
        resource: {
          href: icon,
        },
        // material: {
        //   color: "red",
        // },
        size: 27,
        // outline: {
        //   color: "red",
        //   size: 2,
        // },
      },
    ],

    verticalOffset: verticalOffsetTwo,

    callout: {
      type: "line",
      color: [0, 0, 0],
      size: 1.5,
      border: {
        color: [0, 0, 0],
      },
    },
  };
}

const stopRendererLarge = {
  type: "unique-value",
  field: "CaravanNumber",
  uniqueValueInfos: [
    {
      value: 1,
      // symbol: getSiteColorTwo("assets/Newspaper.png"),
      symbol: getSiteColor("assets/icons/City_Silver.png"),
    },
    {
      value: 2,
      // symbol: getSiteColorTwo("assets/Radio.png"),
      symbol: getSiteColor("assets/icons/City_Red.png"),
    },
    {
      value: 3,
      // symbol: getSiteColorTwo("assets/Radio.png"),
      symbol: getSiteColor("assets/icons/City_Pink.png"),
    },
    {
      value: 4,
      // symbol: getSiteColorTwo("assets/Radio.png"),
      symbol: getSiteColor("assets/icons/City_Black.png"),
    },
    {
      value: 5,
      // symbol: getSiteColorTwo("assets/Radio.png"),
      symbol: getSiteColor("assets/icons/City_Blue.png"),
    },
    {
      value: 6,
      // symbol: getSiteColorTwo("assets/Radio.png"),
      symbol: getSiteColor("assets/icons/City_Green.png"),
    },
    {
      value: 7,
      // symbol: getSiteColorTwo("assets/Radio.png"),
      symbol: getSiteColor("assets/icons/City_Light_Blue.png"),
    },
    {
      value: 8,
      // symbol: getSiteColorTwo("assets/Radio.png"),
      symbol: getSiteColor("assets/icons/City_Yellow.png"),
    },
    {
      value: 9,
      // symbol: getSiteColorTwo("assets/Radio.png"),
      symbol: getSiteColor("assets/icons/City_Orange.png"),
    }
  ],
};