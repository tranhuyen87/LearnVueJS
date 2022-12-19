function getName(){
  alert(huyen);
};

class Comp1 extends React.Component{

  // laythongtin(){
  //   alert(123)
  // },
    render(){
          return  <div>
          <h1 className="mauvang"> {this.props.ten} - {this.props.title} </h1>
          <Comp1sup />
          <p>{this.props.children}</p>
          <button onClick={getName.bind}>thong tin</button>
          </div>
      }
};

class Comp1sup extends React.Component{
        render(){
          return  <h3>sub title</h3>
        }
}

ReactDOM.render (
  <div>
    <Comp1 ten="demo 1" title="ttl1">text text </Comp1>
      <Comp1  ten="demo 2" title="ttl2" />
    </div>
, document.getElementById("block1"));

   ReactDOM.render (
     <div>
       <h1 ClassName="mauxanh"> Hello Huyen3</h1>
       <p> test </p>
      </div>
  , document.getElementById("block2"));
