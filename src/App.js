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
        </ul>

        <hr />
        <h1>Nội dung nộp </h1>
        <ul>
          <li>
            <p>
              Video bảo vệ thử khóa luận:&nbsp;
              <a href="https://youtu.be/yeWKoj-9Tno">Link</a>
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
              Video demo ứng dụng:&nbsp;
              <a href="https://youtu.be/j3k97WQ3PVc">Link</a>
            </p>
          </li>
          <li>
            <p>Mã Nguồn:</p>
          </li>
          <ul>
            <li>
              <p>
                Mã nguồn train:&nbsp;
                <a href="https://github.com/nmtri1912/Model">Link </a>
                &nbsp;
                <a href="https://github.com/nmtri1912/Model">(github)</a>
              </p>
            </li>
            <li>
              Mã nguồn APi dịch: &nbsp;
              <a href="https://drive.google.com/uc?export=download&id=1fF_K3jll0jHIKv-0F_lmY1hF5CuBp-CY">
                Link
              </a>
            </li>
            <li>
              <p>
                Mã nguồn trang demo:&nbsp;
                <a href="https://github.com/tientruongphamnhat/front-end-demo">
                  Link
                </a>
                &nbsp;
                <a href="https://github.com/tientruongphamnhat/front-end-demo">
                  (github)
                </a>
              </p>
            </li>
          </ul>

          <li>
            <p>
              Slide thuyết trình bảo vệ:&nbsp;
              <a href="https://drive.google.com/uc?export=download&id=1n3Td7zijBZBZ5EUmMvVhtUm2XRrmtaEA">
                Link
              </a>
            </p>
          </li>
          <li>
            <p>
              Luận văn: &nbsp;
              <a href="https://drive.google.com/uc?export=download&id=16pozmwoiS1mLq--qjPYtt9s-ecUIIteo">
                (PDF)
              </a>
              &nbsp;
              <a href="https://drive.google.com/uc?export=download&id=1dVwJTehnRUDrY564Mo1hT71w14LszceI">
                (docx)
              </a>
            </p>
          </li>
          <li>
            <p>
              Tài liệu hướng dẫn cài đặt và biên dịch:&nbsp;
              <a href="https://drive.google.com/uc?export=download&id=1C3GVwJ4oYfMfe6KqyM0PYyCWK3tDfgNE">
                (PDF )
              </a>
              &nbsp;
              <a href="https://drive.google.com/uc?export=download&id=1iGkdWaH9YP7dPdQveMzOUnQ8NYY1EH2D">
                (docx)
              </a>
            </p>
          </li>
          <li>
            <p>
              Tài liệu hướng dẫn triển khai:&nbsp;
              <a href="https://drive.google.com/uc?export=download&id=1Yeo22NZtlObQkMIBMysqK2m70czshabM">
                (PDF)
              </a>
              <a href="https://drive.google.com/uc?export=download&id=1cSnJQEF1pPgUlSp7Zq7Asnbhb7eF3ivi">
                (docx)
              </a>
            </p>
          </li>
          <li>
            <p>Hướng dẫn sử dụng:</p>
          </li>
          <ul>
            <li>
              <p>
                Hướng dẫn sử dụng API:&nbsp;
                <a href="https://drive.google.com/uc?export=download&id=1aqwYURH3OLszYf262GXo0pn96nBzmq7t">
                  (PDF)
                </a>
                &nbsp;
                <a href="https://drive.google.com/uc?export=download&id=1xAwwDw9f8sOykLVzjGXDG-I0I7_6nDlf">
                  (docx)
                </a>
              </p>
            </li>
            <li>
              <p>
                Hướng dẫn sử dụng demo:&nbsp;
                <a href="https://drive.google.com/uc?export=download&id=1gM2tkyqyLsPCvXjtp3IMHS70VeEHupM7">
                  (PDF)
                </a>
                &nbsp;
                <a href="https://drive.google.com/uc?export=download&id=19XfZtheIfOvwWP-WCIANNnxqxy6XHKxG">
                  (docx)
                </a>
              </p>
            </li>
          </ul>
          <li>
            <p>
              Tài liệu hướng dẫn làm trang release:&nbsp;
              <a href="https://drive.google.com/uc?export=download&id=1no9BNBjycq5IJkJCWjELe1lz55ceOZ45">
                (PDF)
              </a>
              &nbsp;
              <a href="https://drive.google.com/uc?export=download&id=12psmK_rvbiL7BcdhxCYuFF_qOkgsBhrO">
                (docx)
              </a>
              &nbsp;
              <a href="https://github.com/tientruongphamnhat/releasePlan">
                (Mã nguồn mẫu github)
              </a>
            </p>
          </li>
          <li>
            <p>
              Trang demo:&nbsp;
              <a href="http://demo-kltn.herokuapp.com/">Link</a>
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
              <a href="https://drive.google.com/uc?export=download&id=16pozmwoiS1mLq--qjPYtt9s-ecUIIteo">
                (PDF)
              </a>
              &nbsp;
              <a href="https://drive.google.com/uc?export=download&id=1dVwJTehnRUDrY564Mo1hT71w14LszceI">
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
            <a href="http://demo-kltn.herokuapp.com/">front-end product</a>
          </li>
          <li>
            <a href="http://34.87.103.230/">back-end model</a>
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

          {/* <h2>07/05/2020</h2>
          <li>
            <a href="http://demo-translate-poc.herokuapp.com/">Demo Poc</a>
          </li>
          <li>
            <Link to="/Release_notes_07-05-2020.txt">
              release_notes_07-05-2020.txt
            </Link>
          </li> */}

          <h2>30/04/2020</h2>

          <h2>23/04/2020</h2>
          <li>
            <a href="https://drive.google.com/uc?export=download&id=1Y39gkMfiyrPBX-4-v3qHV7X0qwjUSmzl">
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
            <a href="https://drive.google.com/uc?export=download&id=1Y39gkMfiyrPBX-4-v3qHV7X0qwjUSmzl">
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
            <a href="https://drive.google.com/uc?export=download&id=1Y39gkMfiyrPBX-4-v3qHV7X0qwjUSmzl">
              Liệt kê các khái niệm chương 2
            </a>
          </li>
          <li>
            <a href="https://drive.google.com/uc?export=download&id=1Z4NGq2kAUDlSpFUmLRgp0bGr2MJILdPO">
              Viết luận văn chương 4(chưa hoàn thành).
            </a>
          </li>
          <li>
            <a href="https://drive.google.com/uc?export=download&id=1L0PwvKsC7A1xeMPl-Y9rcPuEiWNf5iTn">
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
          {/* <li>
            <a href="https://drive.google.com/uc?export=download&id=1gE99dM0byX7Bg-QqoCJCpTaPfGY2Yxjd">
              Slide giới thiệu đề tài
            </a>
          </li> */}

          <li>
            <a href="https://drive.google.com/uc?export=download&id=1YNN50UxzCb1nPtfkTzpJThsG1Ed_6dTL">
              Luận văn chương I
            </a>
          </li>

          {/* <li>
            <a href="http://demo-translate-poc.herokuapp.com/">PoC</a>
          </li> */}

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
        </ul>
        <hr />
      </>
    );
  }
}

export default App;
