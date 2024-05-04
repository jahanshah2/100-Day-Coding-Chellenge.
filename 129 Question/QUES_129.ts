const traditionalVsArrow = {
    value: "traditionalVsArrow value",
    traditionalFunction: function () {
      console.log("Traditional function:", this.value);
    },
    arrowFunction: () => {
      console.log("Arrow function:", this.value);
    },
  };
  
  traditionalVsArrow.traditionalFunction(); // Logs "traditionalVsArrow value"
  traditionalVsArrow.arrowFunction(); 