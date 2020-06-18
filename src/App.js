import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';
import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <>
        <h1>Tổng hợp tài liệu</h1>
        <ul>
          <li>
            <p>
              Google Drive chứa tài liệu:&nbsp;
              <a href="https://drive.google.com/open?id=1UpzHgrxSpEU6TCgFCcNVF-U9HrBprhhW">
                Link
              </a>
            </p>
          </li>

          <li>
            <p>
              Link Trello:&nbsp;
              <a href="https://trello.com/b/gf3ITn1K/kltn">Link</a>
            </p>
          </li>
          <li>
            <p>
              Tài liệu hướng dẫn làm trang release:&nbsp;
              <a href="https://drive.google.com/uc?export=download&id=12psmK_rvbiL7BcdhxCYuFF_qOkgsBhrO">
                Link
              </a>
            </p>
          </li>
          <li>
            <p>
              Tài liệu hướng dẫn triển khai:&nbsp;
              <a href="https://drive.google.com/uc?export=download&id=1cSnJQEF1pPgUlSp7Zq7Asnbhb7eF3ivi">
                Link
              </a>
            </p>
          </li>
          <li>
            <p>
              Video hướng dẫn triển khai:&nbsp;
              <a href="https://youtu.be/MA_V6nNoaXg">Link</a>
            </p>
          </li>
          <li>
            <p>
              Tài liệu hướng dẫn cài đặt và biên dịch:&nbsp;
              <a href="https://drive.google.com/uc?export=download&id=1iGkdWaH9YP7dPdQveMzOUnQ8NYY1EH2D">
                Link
              </a>
            </p>
          </li>
          <li>
            <p>
              Luận văn: &nbsp;
              <a href="https://drive.google.com/uc?export=download&id=1GX38w1O9ahHG5S7lU-IfLoiW1kuNHFUY">
                (PDF)
              </a>
              &nbsp;
              <a href="https://drive.google.com/uc?export=download&id=17drdyB-sXPTg0U1WuUoZv3P--vr49Ccg">
                (docx)
              </a>
            </p>
          </li>
        </ul>
        <hr />

        <h1>Cập nhật quá trình</h1>
        <ul>
          <h2>18/06/2020</h2>
          <li>
            <p>
              <a href="https://drive.google.com/uc?export=download&id=1cSnJQEF1pPgUlSp7Zq7Asnbhb7eF3ivi">
                Tài liệu triển khai
              </a>
            </p>
          </li>
          <li>
            <p>
              <a href="https://youtu.be/MA_V6nNoaXg">
                Video hướng dẫn triển khai
              </a>
            </p>
          </li>
          <li>
            <p>
              <a href="https://drive.google.com/uc?export=download&id=1iGkdWaH9YP7dPdQveMzOUnQ8NYY1EH2D">
                Hướng dẫn cài đặt và biên dịch
              </a>
            </p>
          </li>
          <li>
            <p>
              Luận Văn: &nbsp;
              <a href="https://drive.google.com/uc?export=download&id=1GX38w1O9ahHG5S7lU-IfLoiW1kuNHFUY">
                (PDF)
              </a>
              &nbsp;
              <a href="https://drive.google.com/uc?export=download&id=17drdyB-sXPTg0U1WuUoZv3P--vr49Ccg">
                (docx)
              </a>
            </p>
          </li>
          <li>
            <Link to="/Release_notes_18-06-2020.txt">
              release_notes_18-06-2020.txt
            </Link>
          </li>

          <h2>11/06/2020</h2>
          <li>
            <p>
              <a href="https://drive.google.com/uc?export=download&id=12psmK_rvbiL7BcdhxCYuFF_qOkgsBhrO">
                Tài liệu hướng dẫn làm trang release:
              </a>
            </p>
          </li>
          <li>
            <p>
              <a href="https://drive.google.com/uc?export=download&id=1cSnJQEF1pPgUlSp7Zq7Asnbhb7eF3ivi">
                Tài liệu hướng dẫn triển khai:
              </a>
            </p>
          </li>
          <li>
            <p>
              <a href="https://drive.google.com/uc?export=download&id=1zLIekgmwTlgDMGLyis84-x0LBsHewG5N">
                Chỉnh sửa chương 3
              </a>
            </p>
          </li>
          <li>
            <p>
              <a href="https://drive.google.com/uc?export=download&id=1Z4NGq2kAUDlSpFUmLRgp0bGr2MJILdPO">
                Chỉnh sửa chương 4
              </a>
            </p>
          </li>
          <li>
            <Link to="/Release_notes_11-06-2020.txt">
              release_notes_11-06-2020.txt
            </Link>
          </li>

          <h2>04/06/2020</h2>
          <li>
            <a href="http://demo-translate-poc.herokuapp.com/">
              front-end product
            </a>
          </li>
          <li>
            <a href="http://3.21.179.138/">back-end model</a>
          </li>
          <li>
            <a href="https://drive.google.com/uc?export=download&id=1zLIekgmwTlgDMGLyis84-x0LBsHewG5N">
              Luận văn chương 3
            </a>
          </li>
          <li>
            <Link to="/Release_notes_04-06-2020.txt">
              release_notes_04-06-2020.txt
            </Link>
          </li>
        </ul>
        <hr />
        <h1>Cập nhật quá trình</h1>
        <ul>
          <h2>29/05/2020</h2>

          <h2>21/05/2020</h2>

          <h2>14/05/2020</h2>
          <li>
            <a href="https://youtu.be/bFXfoLTR8YU">Demo</a>
          </li>
          <li>
            <Link to="/Release_notes_14-05-2020.txt">
              release_notes_14-05-2020.txt
            </Link>
          </li>

          <h2>07/05/2020</h2>
          <li>
            <a href="http://demo-translate-poc.herokuapp.com/">Demo Poc</a>
          </li>
          <li>
            <Link to="/Release_notes_07-05-2020.txt">
              release_notes_07-05-2020.txt
            </Link>
          </li>

          <h2>30/04/2020</h2>

          <h2>23/04/2020</h2>
          <li>
            <a href="https://drive.google.com/uc?export=download&id=1er9U-TVcR6hzhB4G0YTxBqYdZRLPyQ3Z">
              update Chương II
            </a>
          </li>
          <li>
            <Link to="/Release_notes_23-04-2020.txt">
              release_notes_23-04-2020.txt
            </Link>
          </li>

          <h2>16/04/2020</h2>

          <h2>09/04/2020</h2>
          <li>
            <a href="https://drive.google.com/uc?export=download&id=1er9U-TVcR6hzhB4G0YTxBqYdZRLPyQ3Z">
              update Chương II
            </a>
          </li>
          <li>
            <Link to="/Release_notes_09-04-2020.txt">
              release_notes_09-04-2020.txt
            </Link>
          </li>

          <h2>02/04/2020</h2>
          <li>
            <a href="https://drive.google.com/uc?export=download&id=1luBeIYEGMeQnpcZbcfeJh-B1Gw9edhpR">
              Slide trình bày model
            </a>
          </li>
          <li>
            <a href="https://github.com/nmtri1912/KLTN/tree/master/NMT-Attention">
              Model Seq2seq + attention
            </a>
          </li>
          <li>
            <Link to="/Release_notes_02-04-2020.txt">
              release_notes_02-04-2020.txt
            </Link>
          </li>

          <h2>26/03/2020</h2>
          <li>
            <a href="https://drive.google.com/uc?export=download&id=11g5b8GbgF4M8AQPgU2tKh-GtqxlO0ng5">
              Liệt kê các khái niệm chương 2
            </a>
          </li>
          <li>
            <a href="https://drive.google.com/uc?export=download&id=1Z4NGq2kAUDlSpFUmLRgp0bGr2MJILdPO">
              Viết luận văn chương 4(chưa hoàn thành).
            </a>
          </li>
          <li>
            <a href="https://drive.google.com/uc?export=download&id=1JibPMxiWHBw2CD9BjTCeHd5Q5oRfNcOi">
              Viết luận văn chương 5.
            </a>
          </li>
          <li>
            <a href="https://github.com/nmtri1912/KLTN/tree/master/NMT">
              Xây dựng model (level character + no attention)
            </a>
          </li>
          <li>
            <Link to="/Release_notes_26-03-2020.txt">
              release_notes_26-03-2020.txt
            </Link>
          </li>

          <h2>19/03/2020</h2>

          <h2>12/03/2020</h2>
          <li>
            <a href="https://drive.google.com/uc?export=download&id=1gE99dM0byX7Bg-QqoCJCpTaPfGY2Yxjd">
              Slide giới thiệu đề tài
            </a>
          </li>

          <li>
            <a href="https://drive.google.com/uc?export=download&id=1ynXsefirPRkY9kok7UR3qa0P2lu57dR-">
              Luận văn chương I
            </a>
          </li>

          <li>
            <a href="http://demo-translate-poc.herokuapp.com/">PoC</a>
          </li>

          <li>
            <Link to="/Release_notes_12-03-2020.txt">
              release_notes_12-03-2020.txt
            </Link>
          </li>

          <h2>06/03/2020</h2>
          <li>
            <a href="https://drive.google.com/uc?export=download&id=1sAH3FshPL6pMzOeVztenPNb_TxDJJ_Wl">
              Mô hình mẫu
            </a>
          </li>

          <li>
            <Link to="/Release_notes_06-03-2020.txt">
              release_notes_06-03-2020.txt
            </Link>
          </li>

          <br />
          {/* <li>
            <a href="https://youtu.be/VDohumbqSmA">
              Link youtube video hướng dẫn cài đặt, sử dụng
            </a>
          </li>
          <li>
            <a href="https://youtu.be/GtA4AhRKEnQ">
              Link youtube demo ứng dụng
            </a>
          </li>
          <li>
            <a href="https://youtu.be/_fnCCNUlW7w">
              Link youtube video bảo vệ thử khoá luận
            </a>
          </li>
          <li>
            <a href="slide_bao_ve_2020-02-10.pptx">Slide thuyết trình</a>
          </li>
          <li>
            <a href="sound_meter_2020-02-10.zip">
              Tập tin nén chứa thư mục mã nguồn
            </a>
          </li>
          <li>
            <a href="android_2020-02-10.apk">android_2020-02-10.apk</a>
          </li>
          <li>
            <a href="huong_dan_su_dung_2020-02-10.pdf">
              Hướng dẫn sử dụng (PDF)
            </a>
          </li>
          <li>
            <a href="huong_dan_cai_dat_bien_dich_2020-02-10.pdf">
              Hướng dẫn cài đặt và biên dịch (PDF)
            </a>
          </li>
          <li>
            <a href="huong_dan_trien_khai_2020-02-10.pdf">
              Hướng dẫn triển khai (PDF)
            </a>
          </li>
          <li>
            <a href="luan_van_2020-02-10.pdf">Luận văn (PDF)</a>
          </li>

          <br /> */}

          {/* <h2>03/02/2020</h2>
          <li>
            <a href="sound_meter_2020-02-03.zip">
              Tập tin nén chứa thư mục mã nguồn
            </a>
          </li>
          <li>
            <a href="android_2020-02-03.apk">android_2020-02-03.apk</a>
          </li>
          <li>
            <a href="huong_dan_su_dung_2020-02-03.pdf">
              Hướng dẫn sử dụng (PDF)
            </a>
          </li>
          <li>
            <a href="huong_dan_cai_dat_bien_dich_2020-02-03.pdf">
              Hướng dẫn cài đặt và biên dịch (PDF)
            </a>
          </li>
          <li>
            <a href="luan_van_2020-02-03.pdf">Luận văn (PDF)</a>
          </li>

          <br />

          <h2>02/01/2020</h2>
          <li>
            <a href="android_2020-01-02.apk">android_2020-01-02.apk</a>
          </li>
          <li>
            <a href="release_notes_2020-01-02.txt">
              release_notes_2020-01-02.txt
            </a>
          </li>

          <br />

          <h2>19/12/2019</h2>
          <li>
            <a href="android_2019-12-19.apk">android_2019-12-19.apk</a>
          </li>
          <li>
            <a href="release_notes_2019-12-19.txt">
              release_notes_2019-12-19.txt
            </a>
          </li>

          <br />

          <h2>05/12/2019</h2>
          <li>
            <a href="chuong-4-luan-van-05122019.pdf">
              Chương 4: Cài đặt giải pháp
            </a>
          </li>
          <li>
            <a href="chuong-1-luan-van-05122019.pdf">
              Chương 1: Giới thiệu (Cập nhật)
            </a>
          </li>
          <li>
            <a href="android_2019-12-05.apk">android_2019-12-05.apk</a>
          </li>
          <li>
            <a href="release_notes_2019-12-05.txt">
              release_notes_2019-12-05.txt
            </a>
          </li>

          <br />

          <h2>28/11/2019</h2>
          <li>
            <a href="chuong-3-luan-van-28112019.docx">
              Chương 3: Thiết kế giải pháp
            </a>
          </li>
          <li>
            <a href="chuong-4-luan-van-28112019.docx">
              Chương 4: Cài đặt giải pháp
            </a>
          </li>
          <li>
            <a href="android_2019-11-28.apk">android_2019-11-28.apk</a>
          </li>
          <li>
            <a href="release_notes_2019-11-28.txt">
              release_notes_2019-11-28.txt
            </a>
          </li>

          <br />

          <h2>21/11/2019</h2>
          <li>
            <a href="android_2019-11-21.apk">android_2019-11-21.apk</a>
          </li>
          <li>
            <a href="release_notes_2019-11-21.txt">
              release_notes_2019-11-21.txt
            </a>
          </li>

          <br />

          <h2>14/11/2019</h2>
          <li>
            <a href="android_2019-11-14.apk">android_2019-11-14.apk</a>
          </li>
          <li>
            <a href="release_notes_2019-11-14.txt">
              release_notes_2019-11-14.txt
            </a>
          </li> */}
        </ul>
        <hr />
      </>
    );
  }
}

export default App;
