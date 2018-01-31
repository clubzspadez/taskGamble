var appRoot = document.getElementById('app');

// let details = "";
// let button = "Show Me";
// const toggleItem = () => {
// 	if(details === ""){
// 		details = 'You can see me!';
// 		button = 'Hide Me';
// 		renderAppTest();
// 	} else if(details.length > 0){
// 		details = '';
// 		button = 'Show Me';
// 		renderAppTest();
// 	}
// };
//  Instructors solution
let details = false;

const toggleItem = () => {
	details = !details;
	renderAppTest();
};



const renderAppTest = () => {
  var templateTwo = (
      <div>
        <h1>Visibility Toggle</h1>
        <button id="show" onClick={toggleItem}>{details ? 'Hide details' : 'Show details'}</button>
        {details && (
					<p>Details are showing up!</p>
				)}
      </div>
  );  
  
  ReactDOM.render(templateTwo , appRoot);
  }
  
  renderAppTest();