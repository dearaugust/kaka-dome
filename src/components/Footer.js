import React from 'react';
import { NavLink,withRouter } from 'react-router-dom'; //withRouter 获取父级的属性

class Footer  extends React.Component {
  render(){
    let active = this.props.location.pathname;
    return(
      <footer id='footer'>
        <NavLink exact activeStyle={{color:'#F44336'}} to='/kaka-demo/'>
          <img src={ active==='/kaka-demo/' ? require('../img/footer/u9.png') : require('../img/footer/u14.png')} alt=''/><br/>首页
        </NavLink>
        <NavLink activeStyle={{color:'#F44336'}} to='/kaka-demo/find'>
          <img src={ active==='/kaka-demo/find' ? require('../img/footer/u26.png') : require('../img/footer/u21.png')} alt='' /><br/>发现
        </NavLink>
        <NavLink activeStyle={{color:'#F44336'}} to='/kaka-demo/release'  style={{position:'relative',top:'-25px'}}>
          <img src={require('../img/footer/u3.png')} style={{width:'55px',height:'55px'}} alt=''/>
          <img src={ active==='/kaka-demo/release' ? require('../img/footer/u38.png') : require('../img/footer/u32.png')} style={{width:'44px',height:'44px',position:'absolute',left:'50%',top:'50%',marginLeft:'-22px',marginTop:'-22px'}} alt=''/><br/>发布
        </NavLink>
        <NavLink activeStyle={{color:'#F44336'}} to='/kaka-demo/news'>
          <img src={ active==='/kaka-demo/news' ? require('../img/footer/u48.png') : require('../img/footer/u42.png')} alt=''/><br/>消息
        </NavLink>
        <NavLink activeStyle={{color:'#F44336'}} to='/kaka-demo/mine'>
          <img src={ active==='/kaka-demo/mine' ? require('../img/footer/u58.png') : require('../img/footer/u52.png')} alt=''/><br/>我的
        </NavLink>
      </footer>
    )
  }
}

export default withRouter(Footer);
