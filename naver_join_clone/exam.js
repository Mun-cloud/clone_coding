/**
 * @filename : exam.js
 * @author : 문태호 (mun05170@gmail.com)
 * @description : 네이버 회원가입 항목별 입력내용의 정규표현식 검사 수행 후, true/false로 해당 정규표현식 충족하는지 여부를 반환하는 함수들의 모음
 */

class RegexNaver {
  /**
   * 값의 존재 여부를 검사한다.
   * @param {string} selector 입력요소에 해당하는 CSS 선택자
   * @param {string} msg      값이 없을 경우 표시할 메세지 내용
   * @return {boolean}     입력된 경우 true / 입력되지 않은 경우 false
   */
  value(selector, msg) {
    //   앞뒤의 공백을 제외하고 내용만 추출
    const field = document.querySelector(selector);
    const content = field.value.trim();

    if (!content) {
      // 값이 없다면?
      alert(msg); // 메시지 표시
      field.focus(); // 대상요소에게 포커스 강제 지정
      return false; // 실패했음을 리턴
    }
    return true; // 성공했음을 리턴
  }

  /**
   * 입력값이 정규표현식을 충족하는지 검사한다.
   * @param {string} selector 입력요소에 해당하는 CSS 선택자
   * @param {string} msg      표시할 메세지
   * @param {string} regex_expr  검사할 정규표현식
   * @return {boolean} 표현식을 충족할 경우 true / 그렇지 않을 경우 false
   */
  field(selector, msg, regex_expr) {
    const field = document.querySelector(selector);
    let src = field.value.trim(); // 입력값을 가져온다.

    // 입력값에 대한 정규표현식 검사가 실패라면?
    if (!regex_expr.test(src)) {
      alert(msg); // 메세지 표시
      field.value = ""; // 입력값을 강제로 지운다.
      field.focus(); // 포커스 강제 지정
      return false; // 실패했음을 리턴
    }
    return true; // 성공했음을 리턴
  }

  /**
   * 두 요소의 입력값이 동일한지 검사한다.
   * @param {string} origin_selector 원본 요소의 selector
   * @param {string} compare_selector  검사 대상 요소의 selector
   * @param {string} msg      검사에 실패한 경우 표시할 메세지
   * @return {boolean} 동일한 경우 경우 true / 다른 경우 false
   */
  compare_to(origin_selector, compare_selector, msg) {
    const origin = document.querySelector(origin_selector);
    const compare = document.querySelector(compare_selector);
    let src = origin.value.trim(); // 원본값을 가져온다.
    let dsc = compare.value.trim(); // 비교할 값을 가져온다.

    if (src != dsc) {
      // 두 요소의 입력값이 다르다면?
      alert(msg); //메시지 표시
      origin.value = ""; // 원본요소의 입력값 지움
      compare.value = ""; // 검사 대상의 입력값 지움
      origin.focus(); // 원본 요소에게 포커스 강제 지정
      return false; // 실패했음을 리턴
    }
    return true; // 성공했음을 리턴
  }

  /**
   * 이메일주소 형식인지 검사하기 위해 field()를 간접적으로 호출한다.
   * @param {string} selector 입력요소에 해당하는 CSS 선택자
   * @param {string} msg      표시할 메세지
   * @return {boolean} 표현식을 충족할 경우 true / 그렇지 않은 경우 false
   */
  email(selector, msg) {
    return this.field(
      selector,
      msg,
      /^([\w-]+(?:\.[\w-]+)*)@*((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
    );
  }

  /**
   * id 형식이 맞는지 검사한다.
   * @param {string} selector 입력요소에 해당하는 CSS 선택자
   * @param {string} msg      값이 없을 경우 표시할 메세지 내용
   * @return {boolean}    조건을 충족하는 경우 true / 불만족 하는 경우 false
   */

  idTest(selector, msg) {
    return this.field(selector, msg, /^[a-z0-9-_]{5,20}$/);
  }

  /**
   * pw 형식이 맞는지 검사한다.
   * @param {string} selector 입력요소에 해당하는 CSS 선택자
   * @param {string} msg      값이 없을 경우 표시할 메세지 내용
   * @return {boolean}    조건을 충족하는 경우 true / 불만족 하는 경우 false
   */
  pwTest(selector, msg) {
    return this.field(selector, msg, /^[a-zA-Z+0-9!@#$%^&*+-_`~]{8,16}$/);
  }

  /**
   * 이름이 형식이 맞는지 검사한다.
   * @param {string} selector 입력요소에 해당하는 CSS 선택자
   * @param {string} msg      값이 없을 경우 표시할 메세지 내용
   * @return {boolean}    조건을 충족하는 경우 true / 불만족 하는 경우 false
   */
  nameTest(selector, msg) {
    return this.field(selector, msg, /^[a-zA-Zㄱ-ㅎ가-힣]*$/);
  }

  /**
   * 생년이 형식이 맞는지 검사한다.
   * @param {string} selector 입력요소에 해당하는 CSS 선택자
   * @param {string} msg      값이 없을 경우 표시할 메세지 내용
   * @return {boolean}    조건을 충족하는 경우 true / 불만족 하는 경우 false
   */
  yyTest(selector, msg) {
    return this.field(selector, msg, /^[0-9]{4}$/);
  }

  /**
   * 생년월일의 일이 형식이 맞는지 검사한다.
   * @param {string} selector 입력요소에 해당하는 CSS 선택자
   * @param {string} msg      값이 없을 경우 표시할 메세지 내용
   * @return {boolean}    조건을 충족하는 경우 true / 불만족 하는 경우 false
   */
  ddTest(selector, msg) {
    return this.field(selector, msg, /^[0-9]{2}$/);
  }

  /**
   * 날짜 형식이 맞는지 검사
   * @param {string} selector
   * @param {string} y
   * @param {sting} m
   * @param {sting}  d
   * @param {sting} msg
   * @returns {boolean}
   */
  dateCheck(selector, y, m, d, msg) {
    const field = document.querySelector(selector);
    let dateRegex =
      /^(?=\d)(?:(?:31(?!.(?:0?[2469]|11))|(?:30|29)(?!.0?2)|29(?=.0?2.(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00)))(?:\x20|$))|(?:2[0-8]|1\d|0?[1-9]))([-.\/])(?:1[012]|0?[1-9])\1(?:1[6-9]|[2-9]\d)?\d\d(?:(?=\x20\d)\x20|$))?(((0?[1-9]|1[012])(:[0-5]\d){0,2}(\x20[AP]M))|([01]\d|2[0-3])(:[0-5]\d){1,2})?$/;
    if (!dateRegex.test(parseInt(d) + "-" + parseInt(m) + "-" + parseInt(y))) {
      alert(msg); // 메세지 표시
      field.value = ""; // 입력값을 강제로 지운다.
      field.focus(); // 포커스 강제 지정
      return false; // 실패했음을 리턴
    }
    return true; // 성공했음을 리턴
  }

  /**
   * 만 14세 미만인지 검사
   * @param {stirng} selector 오류 발생시 반환할 CSS 선택자
   * @param {string} bir 생년월일 입력정보 yyyyMMdd
   * @param {string} msg      값이 없을 경우 표시할 메세지 내용
   * @returns {boolean} 어린이가 아닌경우 true / 만14세미만 어린이인 경우 false
   */
  childTest(selector, bir, msg) {
    const field = document.querySelector(selector);
    let today = new Date();
    let y = "" + today.getFullYear();
    let m =
      "" +
      (today.getMonth() < 9
        ? "0" + (today.getMonth() + 1)
        : today.getMonth() + 1); // getMonth()
    let d =
      "" + (today.getDate() < 10 ? "0" + today.getDate() : today.getDate());
    // 만14세 이상 여부 검사
    if (!(parseInt(y + m + d) - parseInt(bir) - 140000 > 0)) {
      alert(msg); // 메세지 표시
      field.value = ""; // 입력값을 강제로 지운다.
      field.focus(); // 포커스 강제 지정
      return false; // 실패했음을 리턴
    }
    return true; // 성공했음을 리턴
  }
}
