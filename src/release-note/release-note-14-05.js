import React from 'react';
import '../App.css';

class Release1405 extends React.Component {
  render() {
    return (
      <>
        <ul>
          <li>Đã chạy được demo</li>
          <li>Model đã chạy tạm ổn, nhưng độ chính xác còn thấp</li>
          <li>
            Tụi em đang bị mắc ở phần deploy lên aws, file đang quá lớn và tiêu
            tốn tài nguyên nhiều
            <br /> model trước nhẹ hơn nhưng chỉ dịch được 2 câu là bị hết tài
            nguyên và cần phải restart cloud mới chạy lại được
          </li>
        </ul>
      </>
    );
  }
}

export default Release1405;
