import React from 'react';
import '../App.css';

class Release0705 extends React.Component {
  render() {
    return (
      <>
        <ul>
          <li>Đã chạy được demo</li>
          <li>Phần front-end em deploy lên heroku chạy ổn</li>
          <li>
            Nhưng phần Rest APi server đang deploy trên aws ec2 cứ mỗi lần hết
            tài nguyên là bị die, em không biết nên fix thế nào
          </li>
        </ul>
      </>
    );
  }
}

export default Release0705;
