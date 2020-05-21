import React from 'react'
import './style.css'
import { connect } from 'react-redux';
import { getComments } from '../../reducer/action'
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import MUIDataTable from "mui-datatables";
import '../../_pageloader.scss'
const columns = [
    {
        name: "userId",
        label: "User Id",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "id",
        label: "Id",
        options: {
            filter: true,
            sort: false,
        }
    },
    {
        name: "title",
        label: "Title",
        options: {
            filter: true,
            sort: false,
        }
    },
    {
        name: "body",
        label: "Body",
        options: {
            filter: true,
            sort: false,
        }
    },
];
const data = [];



class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.getData()
    }

     options = {
        filterType: 'checkbox',
        selectableRows: true,
        expandableRows: true,
        fullRowTrigger: true,
        expandableRowsOnClick: true,
        renderExpandableRow: (rowData, rowMeta) => {
            console.log(rowData, rowMeta);
            
             if(this.props.comments.length>0)
            return (
                
                    this.props.comments.map((comment)=>{
                   return <TableRow >
                       <TableCell colSpan={rowData.length+12}>
                       <div className="comment-container"><h5>{comment.email}:-</h5><p>{comment.body}</p></div> 
                       </TableCell>
                    </TableRow>})
            
            );
            else
            return (
                <TableRow><TableCell colSpan={rowData.length+12} ><div className="page-loader after-loading">
            <div className="lds-default">
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
            </div>
            </div></TableCell></TableRow>)
        },
        onRowClick: (rowData) => {
            this.props.getComment(rowData[1])
        }
    };

    getData() {
        this.props.list.map((post) => {
            data.push({ userId: post.userId, id: post.id, title: post.title, body: post.body })
        })
    }
    render() {
        console.log(data)
        return (
            <div className="table-container">
                <MUIDataTable
                    title={"Posts List"}
                    data={data}
                    columns={columns}
                    options={this.options}
                />

            </div>
        )
    }


}
function mapStateToProps(state) {
    return {
      list: state.list,
      comments:state.comments,
    }
  }
  const mapDispatchToProps = dispatch => {
  
    return {
      getComment: (id) => dispatch(getComments(id))
  
    }
  };
  

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);