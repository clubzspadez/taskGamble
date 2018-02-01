'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CountApp = function (_React$Component) {
  _inherits(CountApp, _React$Component);

  function CountApp(props) {
    _classCallCheck(this, CountApp);

    var _this = _possibleConstructorReturn(this, (CountApp.__proto__ || Object.getPrototypeOf(CountApp)).call(this, props));

    _this.handleAddOne = _this.handleAddOne.bind(_this);
    _this.handleMinusOne = _this.handleMinusOne.bind(_this);
    _this.handleReset = _this.handleReset.bind(_this);
    //data we want to re-render 
    _this.state = {
      count: 0
    };
    return _this;
  }

  _createClass(CountApp, [{
    key: 'handleAddOne',
    value: function handleAddOne() {
      this.setState(function (prevState) {
        return {
          count: prevState.count + 1
        };
      });
    }
  }, {
    key: 'handleMinusOne',
    value: function handleMinusOne() {
      this.setState(function (prevState) {
        return {
          count: prevState.count - 1
        };
      });
    }
  }, {
    key: 'handleReset',
    value: function handleReset() {
      this.setState(function (prevState) {
        return {
          count: 0
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          'Count: ',
          this.state.count
        ),
        React.createElement(
          'button',
          { onClick: this.handleAddOne },
          '+1'
        ),
        React.createElement(
          'button',
          { onClick: this.handleMinusOne },
          '-1'
        ),
        React.createElement(
          'button',
          { onClick: this.handleReset },
          'Reset'
        )
      );
    }
  }]);

  return CountApp;
}(React.Component);

ReactDOM.render(React.createElement(CountApp, null), document.getElementById('app'));
// var appRoot = document.getElementById('app');

// // let details = "";
// // let button = "Show Me";
// // const toggleItem = () => {
// // 	if(details === ""){
// // 		details = 'You can see me!';
// // 		button = 'Hide Me';
// // 		renderAppTest();
// // 	} else if(details.length > 0){
// // 		details = '';
// // 		button = 'Show Me';
// // 		renderAppTest();
// // 	}
// // };
// //  Instructors solution
// let details = false;

// const toggleItem = () => {
// 	details = !details;
// 	renderAppTest();
// };


// const renderAppTest = () => {
//   var templateTwo = (
//       <div>
//         <h1>Visibility Toggle</h1>
//         <button id="show" onClick={toggleItem}>{details ? 'Hide details' : 'Show details'}</button>
//         {details && (
// 					<p>Details are showing up!</p>
// 				)}
//       </div>
//   );  

//   ReactDOM.render(templateTwo , appRoot);
//   }

//   renderAppTest();
