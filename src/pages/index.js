import * as React from "react"
import Ask from './../components/ask'
import Layout from './../components/layout';
import Home from './../components/home';
import Get from './../components/get';

const Main = () => {
  return (
<div id="home">

    <Layout>
      <Home>  
      </Home>
      <Ask></Ask>
      <Get></Get>
    </Layout>
    </div>

  );
}
export default Main
