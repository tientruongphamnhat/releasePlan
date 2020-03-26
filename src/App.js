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
              Google Drive chứa tài liệu:
              <a href="https://drive.google.com/open?id=1UpzHgrxSpEU6TCgFCcNVF-U9HrBprhhW">
                Link
              </a>
            </p>
          </li>

          <li>
            <p>
              Link Trello:
              <a href="https://trello.com/b/gf3ITn1K/kltn">Link</a>
            </p>
          </li>

          {/* <li>
            <p>
              Video bảo vệ thử khoá luận:
              <a href="https://youtu.be/_fnCCNUlW7w">Link Youtube</a>
            </p>
          </li>

          <li>
            <p>
              Video hướng dẫn cài đặt, sử dụng:
              <a href="https://youtu.be/VDohumbqSmA">Link Youtube</a>
            </p>
          </li>

          <li>
            <p>
              Video demo ứng dụng:
              <a href="https://youtu.be/GtA4AhRKEnQ">Link Youtube</a>
            </p>
          </li>

          <li>
            <p>
              Ứng dụng Sound Meter:
              <a href="sound_meter_2020-02-10.zip">(Mã nguồn)</a>
              <a href="android_2020-02-10.apk">(Tập tin cài đặt .apk)</a>
            </p>
          </li>

          <li>
            <p>
              Slide thuyết trình bảo vệ:
              <a href="slide_bao_ve_2020-02-10.pptx">(Bản PPTX)</a>
            </p>
          </li>

          <li>
            <p>
              Luận văn:
              <a href="luan_van_2020-02-10.pdf">(Bản PDF)</a>
              <a href="luan_van_2020-02-10.docx">(Bản DOCX)</a>
            </p>
          </li>

          <li>
            <p>
              Hướng dẫn cài đặt, biên dịch:
              <a href="huong_dan_cai_dat_bien_dich_2020-02-10.pdf">(Bản PDF)</a>
              <a href="huong_dan_cai_dat_bien_dich_2020-02-10.docx">
                (Bản DOCX)
              </a>
            </p>
          </li>

          <li>
            <p>
              Hướng dẫn triển khai:
              <a href="huong_dan_trien_khai_2020-02-10.pdf">(Bản PDF)</a>
              <a href="huong_dan_trien_khai_2020-02-10.docx">(Bản DOCX)</a>
            </p>
          </li>

          <li>
            <p>
              Hướng dẫn sử dụng:
              <a href="huong_dan_su_dung_2020-02-10.pdf">(Bản PDF)</a>
              <a href="huong_dan_su_dung_2020-02-10.docx">(Bản DOCX)</a>
            </p>
          </li>

          <li>
            <p>
              Hướng dẫn xây dựng trang web Release:
              <a href="huong_dan_cai_dat_trang_release.pdf">(Bản PDF)</a>
              <a href="huong_dan_cai_dat_trang_release.docx">(Bản DOCX)</a>
              <a href="web_release.zip">(Mã nguồn mẫu)</a>
            </p>
          </li> */}
        </ul>
        <hr />
        <h1>Cập nhật quá trình</h1>
        <ul>
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
            <a href="https://demokltn.herokuapp.com/">PoC</a>
          </li>

          <li>
            <Link to="/Release_notes_12-03-2020.txt">
              release_notes_12-03-2020.txt
            </Link>
          </li>
          <h2>19/03/2020</h2>

          <br />

          <h2>26/03/2020</h2>
          <li>
            <a href="https://drive.google.com/uc?export=download&id=11g5b8GbgF4M8AQPgU2tKh-GtqxlO0ng5">
              Liệt kê các khái niệm chương 2
            </a>
          </li>
          <li>
            <a href="https://drive.google.com/uc?export=download&id=1374QZBBBf8MJuV0fRbWseBf-NieE1QMk">
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
