    // src/js/components/List.js
    import React, { Component } from 'react';
    import { connect } from "react-redux";
    import { 
        loadArticles 
    } from './../actions'
    const mapStateToProps = state => { // Step 4
      return { articles: state.articleReducer.articles };
    };
    let $this;
    class List extends Component {
        constructor(props){
            super(props);
            $this = this; 
        }
          
    //   componentWillMount() {
    //       console.log("loading ............");
    //       loadArticles()
    //   }
      componentDidMount(){

        this.props.loadArticles()  // redux_step1 go to 'Actions' 
        
    }
    articlesRow(){
        if($this.props.articles instanceof Array){  // redux_step5 'Component'  can use as this.props.store.datas // something like this
			return $this.props.articles.map(function(object, i){
                console.log("object");
                console.log(object[0]);
				return <Tr p={object} no={i+1} key={i} />;
			})
		}
    }

      render() {
    
            return ( 
                <div>
                    <div className="container-fluid main-container">
                        <div className="col-md-6 col-md-offset-1 dashboard-main-content">
                            <div className="posts-wrapper animated fadeInUp" data-behavior="endless-scroll" data-animation="fadeInUp-fadeOutDown">
    
                                {this.articlesRow()}
                            </div>
                        </div>
                    </div>
    
                </div>
            );
        }
    }
    class Tr extends Component{
        constructor(props) {
            super(props);        
        }
          render(){
            return(
                <div>
                    <h3>{this.props.p[0].title}</h3>
                    <h3>{this.props.p[0].description}</h3>
                </div>
               
            )
        }
    }
    export default connect(mapStateToProps,{loadArticles})(List);
    //export default connect(mapStateToProps, { getPosts })(Post);
    //export default List;