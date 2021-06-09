import "./App.css";
import { useEffect, useState } from "react";
import Menu from "./Menu";
import Intro from "./Intro";
import LoadingScreen from "./LoadingScreen";

function App() {
  const [setContentClass, addContentClass] = useState("App-content");
  const [showContent, changeShowContent] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      addContentClass("App-content slide");
    }, 4000);
    setTimeout(() => {
      changeShowContent(true);
    }, 5000);
  });
  return (
    <div className="container">
      <div className="App">
        <LoadingScreen></LoadingScreen>
        <div className={setContentClass}>
          <div className="yellow">
            {showContent ? (
              <Menu>
              </Menu>
            ) : (
              ""
            )}
          </div>
          <div className="black">
            {showContent ? (
             <Intro></Intro>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      {showContent ? (
        <div className="slider">
          <p className="padding">
            come on!! 
            Nothing bro!! This works if you can modify the file, or if the file does
        not have proper JSON as its contents. For instance the sample content
        for data.json above does not pass validation: jsonlint.com because it is
        really JavaScript. Dropping the wrapping single quotes would turn it
        into pure JavaScript. – Jason Aller Jun 24 '14 at 5:18 3 Note:
        JSON.parse is not supported in some older browsers (looking at you IE).
        See MDN's Browser Compatibility table for window.JSON. – Sumner Evans
        Apr 14 '15 at 3:49 337 This is not a correct answer. The example in the
        answer is not loading a json file. It is actually just loading another
        javascript file which stores some hardcoded json as a variable named
        data. If you removed the string quotes from around the json in data.json
        you wouldn't even need to use JSON.parse. The question is how to load a
        JSON file not how to hardcode JSON into another javascript file and then
        load it. – wuliwong Jun 19 '15 at 15:04 1 JSON.parse(window.data); would
        provide better information of the scope of the data variable. – Aakash
        Apr 5 '16 at 10:51 1 It does not work for me, or I don't know how to
        make use of the above information. – Nikos Alexandris       Nothing bro!! This works if you can modify the file, or if the file does
        not have proper JSON as its contents. For instance the sample content
        for data.json above does not pass validation: jsonlint.com because it is
        really JavaScript. Dropping the wrapping single quotes would turn it
        into pure JavaScript. – Jason Aller Jun 24 '14 at 5:18 3 Note:
        JSON.parse is not supported in some older browsers (looking at you IE).
        See MDN's Browser Compatibility table for window.JSON. – Sumner Evans
        Apr 14 '15 at 3:49 337 This is not a correct answer. The example in the
        answer is not loading a json file. It is actually just loading another
        javascript file which stores some hardcoded json as a variable named
        data. If you removed the string quotes from around the json in data.json
        you wouldn't even need to use JSON.parse. The question is how to load a
        JSON file not how to hardcode JSON into another javascript file and then
        load it. – wuliwong Jun 19 '15 at 15:04 1 JSON.parse(window.data); would
        provide better information of the scope of the data variable. – Aakash
        Apr 5 '16 at 10:51 1 It does not work for me, or I don't know how to
        make use of the above information. – Nikos Alexandris       Nothing bro!! This works if you can modify the file, or if the file does
        not have proper JSON as its contents. For instance the sample content
        for data.json above does not pass validation: jsonlint.com because it is
        really JavaScript. Dropping the wrapping single quotes would turn it
        into pure JavaScript. – Jason Aller Jun 24 '14 at 5:18 3 Note:
        JSON.parse is not supported in some older browsers (looking at you IE).
        See MDN's Browser Compatibility table for window.JSON. – Sumner Evans
        Apr 14 '15 at 3:49 337 This is not a correct answer. The example in the
        answer is not loading a json file. It is actually just loading another
        javascript file which stores some hardcoded json as a variable named
        data. If you removed the string quotes from around the json in data.json
        you wouldn't even need to use JSON.parse. The question is how to load a
        JSON file not how to hardcode JSON into another javascript file and then
        load it. – wuliwong Jun 19 '15 at 15:04 1 JSON.parse(window.data); would
        provide better information of the scope of the data variable. – Aakash
        Apr 5 '16 at 10:51 1 It does not work for me, or I don't know how to
        make use of the above information. – Nikos Alexandris       Nothing bro!! This works if you can modify the file, or if the file does
        not have proper JSON as its contents. For instance the sample content
        for data.json above does not pass validation: jsonlint.com because it is
        really JavaScript. Dropping the wrapping single quotes would turn it
        into pure JavaScript. – Jason Aller Jun 24 '14 at 5:18 3 Note:
        JSON.parse is not supported in some older browsers (looking at you IE).
        See MDN's Browser Compatibility table for window.JSON. – Sumner Evans
        Apr 14 '15 at 3:49 337 This is not a correct answer. The example in the
        answer is not loading a json file. It is actually just loading another
        javascript file which stores some hardcoded json as a variable named
        data. If you removed the string quotes from around the json in data.json
        you wouldn't even need to use JSON.parse. The question is how to load a
        JSON file not how to hardcode JSON into another javascript file and then
        load it. – wuliwong Jun 19 '15 at 15:04 1 JSON.parse(window.data); would
        provide better information of the scope of the data variable. – Aakash
        Apr 5 '16 at 10:51 1 It does not work for me, or I don't know how to
        make use of the above information. – Nikos Alexandris       Nothing bro!! This works if you can modify the file, or if the file does
        not have proper JSON as its contents. For instance the sample content
        for data.json above does not pass validation: jsonlint.com because it is
        really JavaScript. Dropping the wrapping single quotes would turn it
        into pure JavaScript. – Jason Aller Jun 24 '14 at 5:18 3 Note:
        JSON.parse is not supported in some older browsers (looking at you IE).
        See MDN's Browser Compatibility table for window.JSON. – Sumner Evans
        Apr 14 '15 at 3:49 337 This is not a correct answer. The example in the
        answer is not loading a json file. It is actually just loading another
        javascript file which stores some hardcoded json as a variable named
        data. If you removed the string quotes from around the json in data.json
        you wouldn't even need to use JSON.parse. The question is how to load a
        JSON file not how to hardcode JSON into another javascript file and then
        load it. – wuliwong Jun 19 '15 at 15:04 1 JSON.parse(window.data); would
        provide better information of the scope of the data variable. – Aakash
        Apr 5 '16 at 10:51 1 It does not work for me, or I don't know how to
        make use of the above information. – Nikos Alexandris       Nothing bro!! This works if you can modify the file, or if the file does
        not have proper JSON as its contents. For instance the sample content
        for data.json above does not pass validation: jsonlint.com because it is
        really JavaScript. Dropping the wrapping single quotes would turn it
        into pure JavaScript. – Jason Aller Jun 24 '14 at 5:18 3 Note:
        JSON.parse is not supported in some older browsers (looking at you IE).
        See MDN's Browser Compatibility table for window.JSON. – Sumner Evans
        Apr 14 '15 at 3:49 337 This is not a correct answer. The example in the
        answer is not loading a json file. It is actually just loading another
        javascript file which stores some hardcoded json as a variable named
        data. If you removed the string quotes from around the json in data.json
        you wouldn't even need to use JSON.parse. The question is how to load a
        JSON file not how to hardcode JSON into another javascript file and then
        load it. – wuliwong Jun 19 '15 at 15:04 1 JSON.parse(window.data); would
        provide better information of the scope of the data variable. – Aakash
        Apr 5 '16 at 10:51 1 It does not work for me, or I don't know how to
        make use of the above information. – Nikos Alexandris       Nothing bro!! This works if you can modify the file, or if the file does
        not have proper JSON as its contents. For instance the sample content
        for data.json above does not pass validation: jsonlint.com because it is
        really JavaScript. Dropping the wrapping single quotes would turn it
        into pure JavaScript. – Jason Aller Jun 24 '14 at 5:18 3 Note:
        JSON.parse is not supported in some older browsers (looking at you IE).
        See MDN's Browser Compatibility table for window.JSON. – Sumner Evans
        Apr 14 '15 at 3:49 337 This is not a correct answer. The example in the
        answer is not loading a json file. It is actually just loading another
        javascript file which stores some hardcoded json as a variable named
        data. If you removed the string quotes from around the json in data.json
        you wouldn't even need to use JSON.parse. The question is how to load a
        JSON file not how to hardcode JSON into another javascript file and then
        load it. – wuliwong Jun 19 '15 at 15:04 1 JSON.parse(window.data); would
        provide better information of the scope of the data variable. – Aakash
        Apr 5 '16 at 10:51 1 It does not work for me, or I don't know how to
        make use of the above information. – Nikos Alexandris
          </p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
