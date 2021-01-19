import React , {Component} from 'react';

class Nav extends Component{

    render(){
        var lists = [];
        var data = this.props.data;
        var i = 1;
        while(i<=data.length){
            lists.push(<li key={data[i-1].id}><a href={"./"} data-id={data[i-1].id} onClick={function(e){
                e.preventDefault();
                this.props.onChangePage(e.target.dataset.id);
            }.bind(this)}>{data[i-1].title}</a></li>);
            i = i + 1;
        }

        return(
            <nav>
                <ul>
                    {lists}
                </ul>
            </nav>
        );
    }
  }

  export default Nav;