import React from "react"
 
export default class MemberList extends React.Component{
    render() {
        return(
            <div className="col-lg-12 col-sm-12 p-1">
                <div className="card">
                    <div className="card-body row">
 
                        {/* menampilkan deskripsi */}
                        <div className="col-7">
                            <h5 className="text-info">
                                Member Name: {this.props.nama_member}
                            </h5>
                            <h6>Member Phone: {this.props.tlp}</h6>
                            <h6>Member Address: {this.props.alamat}</h6>
                        </div>
 
                        {/* action */}
                        <div className="col-0">
                            <button className="btn btn-sm btn-primary m-1"
                            onClick={this.props.onEdit}>
                                Edit
                            </button>
 
                            <button className="btn btn-sm btn-danger m-1"
                            onClick={this.props.onDrop}>
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

