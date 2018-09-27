<script>
var Teacher = React.createClass({
  render: function() {
    return (<div>teacher</div>);
  }
});
var TeacherTable = React.createClass({
  render: function() {
    return ( <div className="App">
    <header className="App-header">
    <h1 className="App-title">Welcome To Student Management System</h1>
  </header> );
  }
});
 
ReactDOM.render(
  <TeacherTable />, document.getElementById('root')
);
</script>