import React, { Component } from 'react';
import {connect} from 'react-redux';

class Slide2 extends Component {
    
    toSlug = (str) => {
        // Chuyển hết sang chữ thường
        str = str.toLowerCase();

        // xóa dấu
        str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
        str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
        str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
        str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
        str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
        str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
        str = str.replace(/(đ)/g, 'd');

        // Xóa ký tự đặc biệt
        str = str.replace(/([^0-9a-z-\s])/g, '');

        // Xóa khoảng trắng thay bằng ký tự -
        str = str.replace(/(\s+)/g, '-');

        // xóa phần dự - ở đầu
        str = str.replace(/^-+/g, '');

        // xóa phần dư - ở cuối
        str = str.replace(/-+$/g, '');

        // return
        return str;
    }

    getTitle = (title) => {
        if (title)
            return title;

        let topic = this.props.match.params.topic;
        if (topic === "tat-ca")
            return "Tất cả";        
        const category = this.props.categories.filter(categoryItem => categoryItem.slug === topic)[0];
        if (category)
            return category.name;
    }

    render() {
        return ( 
                <div className="slide-wrapper">
                    <div className="slide-v2 row m-lr-auto flex flex-a-c flex-j-c">
                        <div className="content-slide txt-center col col-lg-12">
                            <h1 className="fs-40">{this.props.categories && this.getTitle(this.props.title)}</h1>
                        </div>
                    </div>
                </div>
        );
    }

    componentDidMount(){
        console.log('did mount slide2');
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        categories: state.postReducer.categories
    }
}

export default connect(mapStateToProps)(Slide2);