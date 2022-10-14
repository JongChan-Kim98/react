import React from 'react'

const GroupPurchase = () => {
  return (
    <>
    {/* 카테고리 아이콘 */}
    <hr class="hr-how" />
          <div className='PundingCatagori'>
            <ul>
              <li>
                <button>
                  <div className='ImgBackGroud'>
                    <div className='CategoriImgTech '></div>
                  </div>
                  <div>
                    <span>테크가전</span>
                  </div>
                  </button>
              </li>
              <li>
                <button>
                  <div className='ImgBackGroud'>
                    <div className='CategoriImgPublishing'></div>
                  </div>
                  <div>
                    <span>출판</span>
                  </div>
                  </button>
              </li>
              <li>
                <button>
                  <div className='ImgBackGroud'>
                    <div className='CategoriGive'></div>
                  </div>
                  <div>
                    <span>기부</span>
                  </div>
                  </button>
              </li>
              <li>
                <button>
                  <div className='ImgBackGroud'>
                    <div className='CategoriGive2'></div>
                  </div>
                  <div>
                    <span>후원</span>
                  </div>
                  </button>
              </li>
              <li>
                <button>
                  <div className='ImgBackGroud'>
                    <div className='CategoriMeeting'></div>
                  </div>
                  <div>
                    <span>모임</span>
                  </div>
                  </button>
              </li>
            </ul>
          </div>

          <div className='ListHeaderBar'>
                <div class="search-box">
                  <form action="." method="post">
                    <input class="search-txt" type="text" placeholder="검색어를 입력해 주세요"/>
                    <button class="search-btn" type="submit">
                        <i class="fas fa-search"></i>
                    </button>
                  </form>
                </div>

                <div className='selectOption1'>
                    <form>
                        <select>
                          <option value="">-- 전체 --</option>
                          <option value="">-- 진행 --</option>
                          <option value="">-- 종료 --</option>
                        </select>
                      </form>
                      <form>
                        <select>
                          <option value="">-- 추천순 --</option>
                          <option value="">-- 인기순 --</option>
                          <option value="">-- 펀딩액순 --</option>
                        </select>
                    </form>
                </div>
          </div>

          <hr class="hr-15"></hr>

          <div className='cells'>
            <a href="">
              <div className="cell1"></div>
                <div className='rewardCard'>
                  <p><strong>네이버웹툰 독립일기와 함께하는 명품 차량용 무선충전 거치대</strong></p>
                  <span>테크가전</span> | <span>네이버웹툰</span>
                </div>
            </a>

            <a href="">
              <div className="cell2"></div>
                <div className='rewardCard'>
                  <p><strong>네이버웹툰 유미의 세포들 가습기와 탈취기로 마음의 평화를 되찾아줄게요</strong></p>
                  <span>테크가전</span> | <span>네이버웹툰</span>
                </div>
            </a>
          </div>





    </>
  )
}

export default GroupPurchase