// For English
function onClickEnglish() {
    let answer = document.querySelector(".answer");
    let translatedAnswer = document.querySelector(".translatedAnswer");

    switch (answer.textContent) {
        // food
        case '選択された内容: ごはんが、ほしい / 足りない':
            translatedAnswer.textContent = "Request: I want food!";
            break;
        case '選択された内容: おやつが、ほしい':
            translatedAnswer.textContent = "Request: I want a snack!";
            break;
        case '選択された内容: ごはんが、食べにくい':
            translatedAnswer.textContent = "Request: It's hard to eat food!";
            break;
        // drink
        case '選択された内容: 水が、ほしい':
            translatedAnswer.textContent = "Request: I want water!";
            break;
        case '選択された内容: お茶が、ほしい':
            translatedAnswer.textContent = "Request: I want some tea!";
            break;
        case '選択された内容: コーヒーが、ほしい':
            translatedAnswer.textContent = "Request: I want coffee!";
            break;
        // toilet
        case '選択された内容: トイレに、行きたい':
            translatedAnswer.textContent = "Request: I want to go to the toilet!";
            break;
        case '選択された内容: トイレを、手伝ってほしい':
            translatedAnswer.textContent = "Request: I need help using the toilet!";
            break;
        case '選択された内容: トイレットペーパー切れ':
            translatedAnswer.textContent = "Request: We're out of toilet paper!";
            break;
        // bath
        case '選択された内容: おふろに、入りたい':
            translatedAnswer.textContent = "Request: I want to take a bath!";
            break;
        case '選択された内容: おふろに、入りたくない':
            translatedAnswer.textContent = "Request: I don't want to take a bath!";
            break;
        case '選択された内容: からだを、ふいて':
            translatedAnswer.textContent = "Request: Please wipe my body!";
            break;
        // clothes
        case '選択された内容: 服 / おむつを、きがえたい':
            translatedAnswer.textContent = "Request: Please change my clothes/diaper!";
            break;
        case '選択された内容: 服を、洗ってほしい':
            translatedAnswer.textContent = "Request: Please wash my clothes!";
            break;
        case '選択された内容: ルーペ / めがねが、ほしい':
            translatedAnswer.textContent = "Request: I want loupe/glasses!";
            break;
        // bed
        case '選択された内容: ベッドから、起き上がりたい':
            translatedAnswer.textContent = "Request: Please get me up from bed!";
            break;
        case '選択された内容: ベッドに、寝たい':
            translatedAnswer.textContent = "Request: Please let me lie on the bed!";
            break;
        case '選択された内容: ベッドの、傾きをかえたい':
            translatedAnswer.textContent = "Request: I would like to change the tilt of the bed!";
            break;
        // tv
        case '選択された内容: 広場で、テレビが見たい':
            translatedAnswer.textContent = "Request: I want to watch TV in the hall!";
            break;
        case '選択された内容: 部屋で、テレビが見たい':
            translatedAnswer.textContent = "Request: I want to watch TV in my room!";
            break;
        case '選択された内容: ラジオを、ききたい':
            translatedAnswer.textContent = "Request: I want to listen to the radio!";
            break;
        // ache
        case '選択された内容: いたいところが、ある':
            translatedAnswer.textContent = "Request: I have pain.";
            break;
        case '選択された内容: かゆいところが、ある':
            translatedAnswer.textContent = "Request: I have an itch.";
            break;
        case '選択された内容: 気分がよくない':
            translatedAnswer.textContent = "Request: I feel sick.";
            break;
        // nurse
        case '選択された内容: からだを、診てほしい':
            translatedAnswer.textContent = "Request: I want you to see a nurse.";
            break;
        case '選択された内容: くすりが、ほしい':
            translatedAnswer.textContent = "Request: I want medicine!";
            break;
        case '選択された内容: その他（注射など）':
            translatedAnswer.textContent = "Request: Others (injections, etc)";
            break;
        // default
        default:
            translatedAnswer.textContent = "Answer to Q1 is undefined!";
    }
}


// For Chinese
function onClickChinese() {
    let answer = document.querySelector(".answer");
    let translatedAnswer = document.querySelector(".translatedAnswer");

    switch (answer.textContent) {
        // food
        case '選択された内容: ごはんが、ほしい / 足りない':
            translatedAnswer.textContent = "要求: 我要食物";
            break;
        case '選択された内容: おやつが、ほしい':
            translatedAnswer.textContent = "要求: 我要吃点心";
            break;
        case '選択された内容: ごはんが、食べにくい':
            translatedAnswer.textContent = "要求: 吃饭都难啊";
            break;
        // drink
        case '選択された内容: 水が、ほしい':
            translatedAnswer.textContent = "要求: 我要水";
            break;
        case '選択された内容: お茶が、ほしい':
            translatedAnswer.textContent = "要求: 我想要一些茶";
            break;
        case '選択された内容: コーヒーが、ほしい':
            translatedAnswer.textContent = "要求: 我想喝咖啡";
            break;
        // toilet
        case '選択された内容: トイレに、行きたい':
            translatedAnswer.textContent = "要求: 我想去厕所";
            break;
        case '選択された内容: トイレを、手伝ってほしい':
            translatedAnswer.textContent = "要求: 我需要帮助才能上厕所";
            break;
        case '選択された内容: トイレットペーパー切れ':
            translatedAnswer.textContent = "要求: 我们的卫生纸用完了";
            break;
        // bath
        case '選択された内容: おふろに、入りたい':
            translatedAnswer.textContent = "要求: 我想洗澡";
            break;
        case '選択された内容: おふろに、入りたくない':
            translatedAnswer.textContent = "要求: 我不想洗澡";
            break;
        case '選択された内容: からだを、ふいて':
            translatedAnswer.textContent = "要求: 请擦拭我的身体";
            break;
        // clothes
        case '選択された内容: 服 / おむつを、きがえたい':
            translatedAnswer.textContent = "要求: 请给我换衣服/尿布";
            break;
        case '選択された内容: 服を、洗ってほしい':
            translatedAnswer.textContent = "要求: 请帮我洗衣服";
            break;
        case '選択された内容: ルーペ / めがねが、ほしい':
            translatedAnswer.textContent = "要求: 我想要放大镜/眼镜";
            break;
        // bed
        case '選択された内容: ベッドから、起き上がりたい':
            translatedAnswer.textContent = "要求: 请把我从床上起来";
            break;
        case '選択された内容: ベッドに、寝たい':
            translatedAnswer.textContent = "要求: 请让我躺在床上吧";
            break;
        case '選択された内容: ベッドの、傾きをかえたい':
            translatedAnswer.textContent = "要求: 我想改变床的倾斜度";
            break;
        // tv
        case '選択された内容: 広場で、テレビが見たい':
            translatedAnswer.textContent = "要求: 我想在大厅看电视";
            break;
        case '選択された内容: 部屋で、テレビが見たい':
            translatedAnswer.textContent = "要求: 我想在房间里看电视";
            break;
        case '選択された内容: ラジオを、ききたい':
            translatedAnswer.textContent = "要求: 我想听广播";
            break;
        // ache
        case '選択された内容: いたいところが、ある':
            translatedAnswer.textContent = "要求: 我好疼";
            break;
        case '選択された内容: かゆいところが、ある':
            translatedAnswer.textContent = "要求: 我有点痒";
            break;
        case '選択された内容: 気分がよくない':
            translatedAnswer.textContent = "要求: 我觉得恶心";
            break;
        // nurse
        case '選択された内容: からだを、診てほしい':
            translatedAnswer.textContent = "要求: 我想让你去看护士";
            break;
        case '選択された内容: くすりが、ほしい':
            translatedAnswer.textContent = "要求: 我要药";
            break;
        case '選択された内容: その他（注射など）':
            translatedAnswer.textContent = "要求: 其他（注射等）";
            break;
        // default
        default:
            translatedAnswer.textContent = "Q1 的答案未定义";
    }
}


// For Korean
function onClickKorean() {
    let answer = document.querySelector(".answer");
    let translatedAnswer = document.querySelector(".translatedAnswer");

    switch (answer.textContent) {
        // food
        case '選択された内容: ごはんが、ほしい / 足りない':
            translatedAnswer.textContent = "필요하다: 음식을 원합니다";
            break;
        case '選択された内容: おやつが、ほしい':
            translatedAnswer.textContent = "필요하다: 간식을 원합니다";
            break;
        case '選択された内容: ごはんが、食べにくい':
            translatedAnswer.textContent = "필요하다: 음식이 먹기 어렵습니다";
            break;
        // drink
        case '選択された内容: 水が、ほしい':
            translatedAnswer.textContent = "필요하다: 물을 원해";
            break;
        case '選択された内容: お茶が、ほしい':
            translatedAnswer.textContent = "필요하다: 차를 원해";
            break;
        case '選択された内容: コーヒーが、ほしい':
            translatedAnswer.textContent = "필요하다: 커피를 원합니다";
            break;
        // toilet
        case '選択された内容: トイレに、行きたい':
            translatedAnswer.textContent = "필요하다: 화장실에 가고 싶다";
            break;
        case '選択された内容: トイレを、手伝ってほしい':
            translatedAnswer.textContent = "필요하다: 화장실을 도와주세요";
            break;
        case '選択された内容: トイレットペーパー切れ':
            translatedAnswer.textContent = "필요하다: 화장지가 사라졌습니다";
            break;
        // bath
        case '選択された内容: おふろに、入りたい':
            translatedAnswer.textContent = "필요하다: 목욕에 들어가고 싶습니다";
            break;
        case '選択された内容: おふろに、入りたくない':
            translatedAnswer.textContent = "필요하다: 목욕을하고 싶지 않아";
            break;
        case '選択された内容: からだを、ふいて':
            translatedAnswer.textContent = "필요하다: 내 몸을 닦아주세요";
            break;
        // clothes
        case '選択された内容: 服 / おむつを、きがえたい':
            translatedAnswer.textContent = "필요하다: 내 옷 / 기저귀를 바꾸십시오";
            break;
        case '選択された内容: 服を、洗ってほしい':
            translatedAnswer.textContent = "필요하다: 내 옷을 씻으십시오";
            break;
        case '選択された内容: ルーペ / めがねが、ほしい':
            translatedAnswer.textContent = "필요하다: 확대경 / 안경을 원합니다";
            break;
        // bed
        case '選択された内容: ベッドから、起き上がりたい':
            translatedAnswer.textContent = "필요하다: 나를 침대에서 일으켜주세요";
            break;
        case '選択された内容: ベッドに、寝たい':
            translatedAnswer.textContent = "필요하다: 침대에 눕혀주세요";
            break;
        case '選択された内容: ベッドの、傾きをかえたい':
            translatedAnswer.textContent = "필요하다: 침대의 기울기를 바꾸고 싶습니다";
            break;
        // tv
        case '選択された内容: 広場で、テレビが見たい':
            translatedAnswer.textContent = "필요하다: 홀에서 TV를보고 싶습니다";
            break;
        case '選択された内容: 部屋で、テレビが見たい':
            translatedAnswer.textContent = "필요하다: 방에서 TV를보고 싶습니다";
            break;
        case '選択された内容: ラジオを、ききたい':
            translatedAnswer.textContent = "필요하다: 라디오를 듣고 싶습니다";
            break;
        // ache
        case '選択された内容: いたいところが、ある':
            translatedAnswer.textContent = "필요하다: 나는 고통을 느낀다";
            break;
        case '選択された内容: かゆいところが、ある':
            translatedAnswer.textContent = "필요하다: 가려움증이 있어요";
            break;
        case '選択された内容: 気分がよくない':
            translatedAnswer.textContent = "필요하다: 몸이 아프다";
            break;
        // nurse
        case '選択された内容: からだを、診てほしい':
            translatedAnswer.textContent = "필요하다: 간호사를 만나보시길 바랍니다";
            break;
        case '選択された内容: くすりが、ほしい':
            translatedAnswer.textContent = "필요하다: 나는 약을 원한다";
            break;
        case '選択された内容: その他（注射など）':
            translatedAnswer.textContent = "필요하다: 기타(주사 등)";
            break;
        // default
        default:
            translatedAnswer.textContent = "Q1의 대답이 정의되지 않았습니다.";
    }
}


// For Vietnamese
function onClickVietnamese() {
    let answer = document.querySelector(".answer");
    let translatedAnswer = document.querySelector(".translatedAnswer");

    switch (answer.textContent) {
        // food
        case '選択された内容: ごはんが、ほしい / 足りない':
            translatedAnswer.textContent = "Lời yêu cầu: Tôi muốn thực phẩm!";
            break;
        case '選択された内容: おやつが、ほしい':
            translatedAnswer.textContent = "Lời yêu cầu: Tôi muốn một bữa ăn nhẹ!";
            break;
        case '選択された内容: ごはんが、食べにくい':
            translatedAnswer.textContent = "Lời yêu cầu: Thật khó để ăn đồ ăn!";
            break;
        // drink
        case '選択された内容: 水が、ほしい':
            translatedAnswer.textContent = "Lời yêu cầu: Tôi muốn nước!";
            break;
        case '選択された内容: お茶が、ほしい':
            translatedAnswer.textContent = "Lời yêu cầu: Tôi muốn một ít trà!";
            break;
        case '選択された内容: コーヒーが、ほしい':
            translatedAnswer.textContent = "Lời yêu cầu: Tôi muốn cà phê!";
            break;
        // toilet
        case '選択された内容: トイレに、行きたい':
            translatedAnswer.textContent = "Lời yêu cầu: Tôi muốn đi vệ sinh!";
            break;
        case '選択された内容: トイレを、手伝ってほしい':
            translatedAnswer.textContent = "Lời yêu cầu: Tôi cần giúp đỡ khi sử dụng nhà vệ sinh!";
            break;
        case '選択された内容: トイレットペーパー切れ':
            translatedAnswer.textContent = "Lời yêu cầu: Chúng ta hết giấy vệ sinh rồi!";
            break;
        // bath
        case '選択された内容: おふろに、入りたい':
            translatedAnswer.textContent = "Lời yêu cầu: Tôi muốn đi tắm!";
            break;
        case '選択された内容: おふろに、入りたくない':
            translatedAnswer.textContent = "Lời yêu cầu: Tôi không muốn tắm!";
            break;
        case '選択された内容: からだを、ふいて':
            translatedAnswer.textContent = "Lời yêu cầu: Xin hãy lau cơ thể tôi!";
            break;
        // clothes
        case '選択された内容: 服 / おむつを、きがえたい':
            translatedAnswer.textContent = "Lời yêu cầu: Làm ơn thay quần áo/tã cho tôi!";
            break;
        case '選択された内容: 服を、洗ってほしい':
            translatedAnswer.textContent = "Lời yêu cầu: Hãy giặt quần áo của tôi!";
            break;
        case '選択された内容: ルーペ / めがねが、ほしい':
            translatedAnswer.textContent = "Lời yêu cầu: Tôi muốn kính lúp/kính!";
            break;
        // bed
        case '選択された内容: ベッドから、起き上がりたい':
            translatedAnswer.textContent = "Lời yêu cầu: Làm ơn đỡ tôi dậy khỏi giường đi!";
            break;
        case '選択された内容: ベッドに、寝たい':
            translatedAnswer.textContent = "Lời yêu cầu: Hãy để tôi nằm trên giường!";
            break;
        case '選択された内容: ベッドの、傾きをかえたい':
            translatedAnswer.textContent = "Lời yêu cầu: Tôi muốn thay đổi độ nghiêng của giường!";
            break;
        // tv
        case '選択された内容: 広場で、テレビが見たい':
            translatedAnswer.textContent = "Lời yêu cầu: Tôi muốn xem TV ở hành lang!";
            break;
        case '選択された内容: 部屋で、テレビが見たい':
            translatedAnswer.textContent = "Lời yêu cầu: Tôi muốn xem TV trong phòng của tôi!";
            break;
        case '選択された内容: ラジオを、ききたい':
            translatedAnswer.textContent = "Lời yêu cầu: Tôi muốn nghe đài!";
            break;
        // ache
        case '選択された内容: いたいところが、ある':
            translatedAnswer.textContent = "Lời yêu cầu: Tôi bị đau.";
            break;
        case '選択された内容: かゆいところが、ある':
            translatedAnswer.textContent = "Lời yêu cầu: Tôi bị ngứa.";
            break;
        case '選択された内容: 気分がよくない':
            translatedAnswer.textContent = "Lời yêu cầu: Tôi cảm thấy bệnh.";
            break;
        // nurse
        case '選択された内容: からだを、診てほしい':
            translatedAnswer.textContent = "Lời yêu cầu: Tôi muốn bạn gặp một y tá.";
            break;
        case '選択された内容: くすりが、ほしい':
            translatedAnswer.textContent = "Lời yêu cầu: Tôi muốn thuốc!";
            break;
        case '選択された内容: その他（注射など）':
            translatedAnswer.textContent = "Lời yêu cầu: Khác (tiêm, v.v.)";
            break;
        // default
        default:
            translatedAnswer.textContent = "Câu trả lời cho Q1 là không xác định!";
    }
}


// For Brazil
function onClickBrazil() {
    let answer = document.querySelector(".answer");
    let translatedAnswer = document.querySelector(".translatedAnswer");

    switch (answer.textContent) {
        // food
        case '選択された内容: ごはんが、ほしい / 足りない':
            translatedAnswer.textContent = "Solicitar: Eu quero comida!";
            break;
        case '選択された内容: おやつが、ほしい':
            translatedAnswer.textContent = "Solicitar: Eu quero um lanche!";
            break;
        case '選択された内容: ごはんが、食べにくい':
            translatedAnswer.textContent = "Solicitar: É difícil comer comida!";
            break;
        // drink
        case '選択された内容: 水が、ほしい':
            translatedAnswer.textContent = "Solicitar: Eu quero água!";
            break;
        case '選択された内容: お茶が、ほしい':
            translatedAnswer.textContent = "Solicitar: Eu quero um pouco de chá!";
            break;
        case '選択された内容: コーヒーが、ほしい':
            translatedAnswer.textContent = "Solicitar: Eu quero café!";
            break;
        // toilet
        case '選択された内容: トイレに、行きたい':
            translatedAnswer.textContent = "Solicitar: Eu quero ir ao banheiro!";
            break;
        case '選択された内容: トイレを、手伝ってほしい':
            translatedAnswer.textContent = "Solicitar: Preciso de ajuda para usar o banheiro!";
            break;
        case '選択された内容: トイレットペーパー切れ':
            translatedAnswer.textContent = "Solicitar: Acabou o papel higiênico!";
            break;
        // bath
        case '選択された内容: おふろに、入りたい':
            translatedAnswer.textContent = "Solicitar: Eu quero tomar um banho!";
            break;
        case '選択された内容: おふろに、入りたくない':
            translatedAnswer.textContent = "Solicitar: Eu não quero tomar banho!";
            break;
        case '選択された内容: からだを、ふいて':
            translatedAnswer.textContent = "Solicitar: Por favor, limpe meu corpo!";
            break;
        // clothes
        case '選択された内容: 服 / おむつを、きがえたい':
            translatedAnswer.textContent = "Solicitar: Por favor, troque minhas roupas/fraldas!";
            break;
        case '選択された内容: 服を、洗ってほしい':
            translatedAnswer.textContent = "Solicitar: Por favor, lave minhas roupas!";
            break;
        case '選択された内容: ルーペ / めがねが、ほしい':
            translatedAnswer.textContent = "Solicitar: Eu quero lupa/óculos!";
            break;
        // bed
        case '選択された内容: ベッドから、起き上がりたい':
            translatedAnswer.textContent = "Solicitar: Por favor, me levante da cama!";
            break;
        case '選択された内容: ベッドに、寝たい':
            translatedAnswer.textContent = "Solicitar: Por favor, deixe-me deitar na cama!";
            break;
        case '選択された内容: ベッドの、傾きをかえたい':
            translatedAnswer.textContent = "Solicitar: Gostaria de mudar a inclinação da cama!";
            break;
        // tv
        case '選択された内容: 広場で、テレビが見たい':
            translatedAnswer.textContent = "Solicitar: Quero assistir TV no corredor!";
            break;
        case '選択された内容: 部屋で、テレビが見たい':
            translatedAnswer.textContent = "Solicitar: Quero assistir TV no meu quarto!";
            break;
        case '選択された内容: ラジオを、ききたい':
            translatedAnswer.textContent = "Solicitar: Quero ouvir rádio!";
            break;
        // ache
        case '選択された内容: いたいところが、ある':
            translatedAnswer.textContent = "Solicitar: Eu tenho dor.";
            break;
        case '選択された内容: かゆいところが、ある':
            translatedAnswer.textContent = "Solicitar: Estou com coceira.";
            break;
        case '選択された内容: 気分がよくない':
            translatedAnswer.textContent = "Solicitar: Sinto-me doente.";
            break;
        // nurse
        case '選択された内容: からだを、診てほしい':
            translatedAnswer.textContent = "Solicitar: Quero que você consulte uma enfermeira.";
            break;
        case '選択された内容: くすりが、ほしい':
            translatedAnswer.textContent = "Solicitar: Eu quero remédio!";
            break;
        case '選択された内容: その他（注射など）':
            translatedAnswer.textContent = "Solicitar: Outros (injeções, etc.)";
            break;
        // default
        default:
            translatedAnswer.textContent = "A resposta ao Q1 é indefinida!";
    }
}


// For Nepali
function onClickNepali() {
    let answer = document.querySelector(".answer");
    let translatedAnswer = document.querySelector(".translatedAnswer");

    switch (answer.textContent) {
        // food
        case '選択された内容: ごはんが、ほしい / 足りない':
            translatedAnswer.textContent = "अनुरोध: मलाई खाना चाहियो!";
            break;
        case '選択された内容: おやつが、ほしい':
            translatedAnswer.textContent = "अनुरोध: मलाई खाजा चाहियो!";
            break;
        case '選択された内容: ごはんが、食べにくい':
            translatedAnswer.textContent = "अनुरोध: खाना खानै गाह्रो !";
            break;
        // drink
        case '選択された内容: 水が、ほしい':
            translatedAnswer.textContent = "अनुरोध: मलाई पानी चाहियो!";
            break;
        case '選択された内容: お茶が、ほしい':
            translatedAnswer.textContent = "अनुरोध: मलाई चिया चाहियो!";
            break;
        case '選択された内容: コーヒーが、ほしい':
            translatedAnswer.textContent = "अनुरोध: म कफी चाहन्छु!";
            break;
        // toilet
        case '選択された内容: トイレに、行きたい':
            translatedAnswer.textContent = "अनुरोध: म शौचालय जान चाहन्छु!";
            break;
        case '選択された内容: トイレを、手伝ってほしい':
            translatedAnswer.textContent = "अनुरोध: मलाई शौचालय प्रयोग गर्न मद्दत चाहिन्छ!";
            break;
        case '選択された内容: トイレットペーパー切れ':
            translatedAnswer.textContent = "अनुरोध: हामीसँग शौचालय कागज बाहिर छ!";
            break;
        // bath
        case '選択された内容: おふろに、入りたい':
            translatedAnswer.textContent = "अनुरोध: म नुहाउन चाहन्छु!";
            break;
        case '選択された内容: おふろに、入りたくない':
            translatedAnswer.textContent = "अनुरोध: म नुहाउन चाहन्न!";
            break;
        case '選択された内容: からだを、ふいて':
            translatedAnswer.textContent = "अनुरोध: कृपया मेरो शरीर सफा गर्नुहोस्।!";
            break;
        // clothes
        case '選択された内容: 服 / おむつを、きがえたい':
            translatedAnswer.textContent = "अनुरोध: कृपया मेरो लुगा/डायपर परिवर्तन गर्नुहोस्!";
            break;
        case '選択された内容: 服を、洗ってほしい':
            translatedAnswer.textContent = "अनुरोध: कृपया मेरो लुगा धुनुहोस्!";
            break;
        case '選択された内容: ルーペ / めがねが、ほしい':
            translatedAnswer.textContent = "अनुरोध: म लुप/चश्मा चाहन्छु!";
            break;
        // bed
        case '選択された内容: ベッドから、起き上がりたい':
            translatedAnswer.textContent = "अनुरोध: कृपया मलाई ओछ्यानबाट उठाउनुहोस्!";
            break;
        case '選択された内容: ベッドに、寝たい':
            translatedAnswer.textContent = "अनुरोध: कृपया मलाई ओछ्यानमा सुत्न दिनुहोस्!";
            break;
        case '選択された内容: ベッドの、傾きをかえたい':
            translatedAnswer.textContent = "अनुरोध: म खाटको झुकाव परिवर्तन गर्न चाहन्छु!";
            break;
        // tv
        case '選択された内容: 広場で、テレビが見たい':
            translatedAnswer.textContent = "अनुरोध: म हलमा टिभी हेर्न चाहन्छु!";
            break;
        case '選択された内容: 部屋で、テレビが見たい':
            translatedAnswer.textContent = "अनुरोध: म मेरो कोठामा टिभी हेर्न चाहन्छु!";
            break;
        case '選択された内容: ラジオを、ききたい':
            translatedAnswer.textContent = "अनुरोध: म रेडियो सुन्न चाहन्छु!";
            break;
        // ache
        case '選択された内容: いたいところが、ある':
            translatedAnswer.textContent = "अनुरोध: मलाई पानी चाहियो!";
            break;
        case '選択された内容: かゆいところが、ある':
            translatedAnswer.textContent = "अनुरोध: मलाई खुजली छ।";
            break;
        case '選択された内容: 気分がよくない':
            translatedAnswer.textContent = "अनुरोध: म विरामी महसुस गर्दैछु।";
            break;
        // nurse
        case '選択された内容: からだを、診てほしい':
            translatedAnswer.textContent = "अनुरोध: म तिमीलाई नर्स हेर्न चाहन्छु।";
            break;
        case '選択された内容: くすりが、ほしい':
            translatedAnswer.textContent = "अनुरोध: मलाई औषधि चाहियो!";
            break;
        case '選択された内容: その他（注射など）':
            translatedAnswer.textContent = "अनुरोध: अन्य (इंजेक्शन, आदि)";
            break;
        // default
        default:
            translatedAnswer.textContent = "Q1 को उत्तर अपरिभाषित छ!";
    }
}


// For BahasaIndonesia
function onClickBahasaIndonesia() {
    let answer = document.querySelector(".answer");
    let translatedAnswer = document.querySelector(".translatedAnswer");

    switch (answer.textContent) {
        // food
        case '選択された内容: ごはんが、ほしい / 足りない':
            translatedAnswer.textContent = "Meminta: Saya ingin makanan!";
            break;
        case '選択された内容: おやつが、ほしい':
            translatedAnswer.textContent = "Meminta: Saya ingin camilan!";
            break;
        case '選択された内容: ごはんが、食べにくい':
            translatedAnswer.textContent = "Meminta: Sulit untuk makan makanan!";
            break;
        // drink
        case '選択された内容: 水が、ほしい':
            translatedAnswer.textContent = "Meminta: Saya ingin air!";
            break;
        case '選択された内容: お茶が、ほしい':
            translatedAnswer.textContent = "Meminta: Saya ingin teh!";
            break;
        case '選択された内容: コーヒーが、ほしい':
            translatedAnswer.textContent = "Meminta: Saya ingin kopi!";
            break;
        // toilet
        case '選択された内容: トイレに、行きたい':
            translatedAnswer.textContent = "Meminta: Saya ingin pergi ke toilet!";
            break;
        case '選択された内容: トイレを、手伝ってほしい':
            translatedAnswer.textContent = "Meminta: Saya butuh bantuan menggunakan toilet!";
            break;
        case '選択された内容: トイレットペーパー切れ':
            translatedAnswer.textContent = "Meminta: Kami kehabisan tisu toilet!";
            break;
        // bath
        case '選択された内容: おふろに、入りたい':
            translatedAnswer.textContent = "Meminta: Saya ingin mandi!";
            break;
        case '選択された内容: おふろに、入りたくない':
            translatedAnswer.textContent = "Meminta: Aku tidak mau mandi!";
            break;
        case '選択された内容: からだを、ふいて':
            translatedAnswer.textContent = "Meminta: Tolong bersihkan tubuhku!";
            break;
        // clothes
        case '選択された内容: 服 / おむつを、きがえたい':
            translatedAnswer.textContent = "Meminta: Tolong ganti baju/popok saya!";
            break;
        case '選択された内容: 服を、洗ってほしい':
            translatedAnswer.textContent = "Meminta: Tolong cuci pakaianku!";
            break;
        case '選択された内容: ルーペ / めがねが、ほしい':
            translatedAnswer.textContent = "Meminta: Saya ingin pembesar/kacamata!";
            break;
        // bed
        case '選択された内容: ベッドから、起き上がりたい':
            translatedAnswer.textContent = "Meminta: Tolong bangunkan aku dari tempat tidur!";
            break;
        case '選択された内容: ベッドに、寝たい':
            translatedAnswer.textContent = "Meminta: Tolong biarkan aku berbaring di tempat tidur!";
            break;
        case '選択された内容: ベッドの、傾きをかえたい':
            translatedAnswer.textContent = "Meminta: Saya ingin mengubah kemiringan tempat tidur!";
            break;
        // tv
        case '選択された内容: 広場で、テレビが見たい':
            translatedAnswer.textContent = "Meminta: Saya ingin menonton TV di aula!";
            break;
        case '選択された内容: 部屋で、テレビが見たい':
            translatedAnswer.textContent = "Meminta: Saya ingin menonton TV di kamar saya!";
            break;
        case '選択された内容: ラジオを、ききたい':
            translatedAnswer.textContent = "Meminta: Saya ingin mendengarkan radio!";
            break;
        // ache
        case '選択された内容: いたいところが、ある':
            translatedAnswer.textContent = "Meminta: Air, aku menginginkannya.";
            break;
        case '選択された内容: かゆいところが、ある':
            translatedAnswer.textContent = "Meminta: Saya merasa gatal.";
            break;
        case '選択された内容: 気分がよくない':
            translatedAnswer.textContent = "Meminta: Aku merasa sakit.";
            break;
        // nurse
        case '選択された内容: からだを、診てほしい':
            translatedAnswer.textContent = "Meminta: Saya ingin Anda menemui perawat.";
            break;
        case '選択された内容: くすりが、ほしい':
            translatedAnswer.textContent = "Meminta: Saya ingin obat!";
            break;
        case '選択された内容: その他（注射など）':
            translatedAnswer.textContent = "Meminta: Lainnya (suntikan, dll.)";
            break;
        // default
        default:
            translatedAnswer.textContent = "Jawaban untuk Q1 tidak ditentukan!";
    }
}


// For Burmese
function onClickBurmese() {
    let answer = document.querySelector(".answer");
    let translatedAnswer = document.querySelector(".translatedAnswer");

    switch (answer.textContent) {
        // food
        case '選択された内容: ごはんが、ほしい / 足りない':
            translatedAnswer.textContent = "တောင်းဆိုချက်ကို: စားချင်တယ်!";
            break;
        case '選択された内容: おやつが、ほしい':
            translatedAnswer.textContent = "တောင်းဆိုချက်ကို: သရေစာစားချင်တယ်";
            break;
        case '選択された内容: ごはんが、食べにくい':
            translatedAnswer.textContent = "တောင်းဆိုချက်ကို: အစာစားရတာ ခက်တယ်။";
            break;
        // drink
        case '選択された内容: 水が、ほしい':
            translatedAnswer.textContent = "တောင်းဆိုချက်ကို: ရေလိုချင်တယ်";
            break;
        case '選択された内容: お茶が、ほしい':
            translatedAnswer.textContent = "တောင်းဆိုချက်ကို: လက်ဖက်ရည်သောက်ချင်တယ်";
            break;
        case '選択された内容: コーヒーが、ほしい':
            translatedAnswer.textContent = "တောင်းဆိုချက်ကို: ကော်ဖီသောက်ချင်တယ်";
            break;
        // toilet
        case '選択された内容: トイレに、行きたい':
            translatedAnswer.textContent = "တောင်းဆိုချက်ကို: အိမ်သာသွားချင်တယ်";
            break;
        case '選択された内容: トイレを、手伝ってほしい':
            translatedAnswer.textContent = "တောင်းဆိုချက်ကို: အိမ်သာသုံးဖို့ အကူအညီလိုတယ်။";
            break;
        case '選択された内容: トイレットペーパー切れ':
            translatedAnswer.textContent = "တောင်းဆိုချက်ကို: အိမ်သာသုံးစက္ကူ ပြတ်သွားပြီ။";
            break;
        // bath
        case '選択された内容: おふろに、入りたい':
            translatedAnswer.textContent = "တောင်းဆိုချက်ကို: ရေချိုးချင်တယ်";
            break;
        case '選択された内容: おふろに、入りたくない':
            translatedAnswer.textContent = "တောင်းဆိုချက်ကို: ရေမချိုးချင်ဘူး";
            break;
        case '選択された内容: からだを、ふいて':
            translatedAnswer.textContent = "တောင်းဆိုချက်ကို: ငါ့ခန္ဓာကိုယ်ကို သုတ်ပေးပါ။";
            break;
        // clothes
        case '選択された内容: 服 / おむつを、きがえたい':
            translatedAnswer.textContent = "တောင်းဆိုချက်ကို: ကျေးဇူးပြုပြီး ငါ့အဝတ်/အနှီးကို ပြောင်းပေးပါ။";
            break;
        case '選択された内容: 服を、洗ってほしい':
            translatedAnswer.textContent = "တောင်းဆိုချက်ကို: ကျေးဇူးပြုပြီး ငါ့အဝတ်တွေကို လျှော်ပေးပါ။";
            break;
        case '選択された内容: ルーペ / めがねが、ほしい':
            translatedAnswer.textContent = "တောင်းဆိုချက်ကို: ငါ Loupe/မျက်မှန်လိုချင်တယ်။";
            break;
        // bed
        case '選択された内容: ベッドから、起き上がりたい':
            translatedAnswer.textContent = "တောင်းဆိုချက်ကို: ကျေးဇူးပြုပြီး အိပ်ရာကနေထပါ။";
            break;
        case '選択された内容: ベッドに、寝たい':
            translatedAnswer.textContent = "တောင်းဆိုချက်ကို: ကျေးဇူးပြုပြီး ကုတင်ပေါ်မှာ အိပ်ပါရစေ။";
            break;
        case '選択された内容: ベッドの、傾きをかえたい':
            translatedAnswer.textContent = "တောင်းဆိုချက်ကို: ကုတင်စောင်းကို ပြောင်းချင်ပါတယ်";
            break;
        // tv
        case '選択された内容: 広場で、テレビが見たい':
            translatedAnswer.textContent = "တောင်းဆိုချက်ကို: ခန်းမထဲမှာ TV ကြည့်ချင်တယ်";
            break;
        case '選択された内容: 部屋で、テレビが見たい':
            translatedAnswer.textContent = "တောင်းဆိုချက်ကို: ငါ့အခန်းထဲမှာ တီဗီကြည့်ချင်တယ်";
            break;
        case '選択された内容: ラジオを、ききたい':
            translatedAnswer.textContent = "တောင်းဆိုချက်ကို: ရေဒီယို နားထောင်ချင်တယ်";
            break;
        // ache
        case '選択された内容: いたいところが、ある':
            translatedAnswer.textContent = "တောင်းဆိုချက်ကို: ကိုယ်ဖြစ်ချင်တဲ့ နေရာတစ်ခုရှိတယ်။";
            break;
        case '選択された内容: かゆいところが、ある':
            translatedAnswer.textContent = "တောင်းဆိုချက်ကို: ယားတယ်။";
            break;
        case '選択された内容: 気分がよくない':
            translatedAnswer.textContent = "တောင်းဆိုချက်ကို: နေမကောင်းသလိုခံစားရတယ်။";
            break;
        // nurse
        case '選択された内容: からだを、診てほしい':
            translatedAnswer.textContent = "တောင်းဆိုချက်ကို: သူနာပြုဆရာမကို တွေ့စေချင်တယ်။";
            break;
        case '選択された内容: くすりが、ほしい':
            translatedAnswer.textContent = "တောင်းဆိုချက်ကို: ဆေးလိုချင်တယ်";
            break;
        case '選択された内容: その他（注射など）':
            translatedAnswer.textContent = "တောင်းဆိုချက်ကို: အခြား (ထိုးဆေး စသည်)၊";
            break;
        // default
        default:
            translatedAnswer.textContent = "Q1 အတွက် အဖြေကို သတ်မှတ်မထားပါ။";
    }
}


// For Peruvian
function onClickPeruvian() {
    let answer = document.querySelector(".answer");
    let translatedAnswer = document.querySelector(".translatedAnswer");

    switch (answer.textContent) {
        // food
        case '選択された内容: ごはんが、ほしい / 足りない':
            translatedAnswer.textContent = "Pedido: ¡Quiero comida!";
            break;
        case '選択された内容: おやつが、ほしい':
            translatedAnswer.textContent = "Pedido: ¡Quiero un bocadillo!";
            break;
        case '選択された内容: ごはんが、食べにくい':
            translatedAnswer.textContent = "Pedido: ¡Es difícil comer!";
            break;
        // drink
        case '選択された内容: 水が、ほしい':
            translatedAnswer.textContent = "Pedido: ¡Quiero agua!";
            break;
        case '選択された内容: お茶が、ほしい':
            translatedAnswer.textContent = "Pedido: ¡Quiero un poco de té!";
            break;
        case '選択された内容: コーヒーが、ほしい':
            translatedAnswer.textContent = "Pedido: ¡Quiero Cafe!";
            break;
        // toilet
        case '選択された内容: トイレに、行きたい':
            translatedAnswer.textContent = "Pedido: ¡Quiero ir al baño!";
            break;
        case '選択された内容: トイレを、手伝ってほしい':
            translatedAnswer.textContent = "Pedido: ¡Necesito ayuda para usar el baño!";
            break;
        case '選択された内容: トイレットペーパー切れ':
            translatedAnswer.textContent = "Pedido: ¡Se nos acabó el papel higiénico!";
            break;
        // bath
        case '選択された内容: おふろに、入りたい':
            translatedAnswer.textContent = "Pedido: ¡Quiero tomar un baño!";
            break;
        case '選択された内容: おふろに、入りたくない':
            translatedAnswer.textContent = "Pedido: ¡No quiero bañarme!";
            break;
        case '選択された内容: からだを、ふいて':
            translatedAnswer.textContent = "Pedido: ¡Por favor, limpia mi cuerpo!";
            break;
        // clothes
        case '選択された内容: 服 / おむつを、きがえたい':
            translatedAnswer.textContent = "Pedido: ¡Por favor cámbiame la ropa/pañal!";
            break;
        case '選択された内容: 服を、洗ってほしい':
            translatedAnswer.textContent = "Pedido: ¡Por favor lava mi ropa!";
            break;
        case '選択された内容: ルーペ / めがねが、ほしい':
            translatedAnswer.textContent = "Pedido: ¡Quiero lupas/gafas!";
            break;
        // bed
        case '選択された内容: ベッドから、起き上がりたい':
            translatedAnswer.textContent = "Pedido: ¡Por favor, levántame de la cama!";
            break;
        case '選択された内容: ベッドに、寝たい':
            translatedAnswer.textContent = "Pedido: ¡Por favor déjame acostarme en la cama!";
            break;
        case '選択された内容: ベッドの、傾きをかえたい':
            translatedAnswer.textContent = "Pedido: ¡Me gustaría cambiar la inclinación de la cama!";
            break;
        // tv
        case '選択された内容: 広場で、テレビが見たい':
            translatedAnswer.textContent = "Pedido: ¡Quiero ver la televisión en el pasillo!";
            break;
        case '選択された内容: 部屋で、テレビが見たい':
            translatedAnswer.textContent = "Pedido: ¡Quiero ver la televisión en mi habitación!";
            break;
        case '選択された内容: ラジオを、ききたい':
            translatedAnswer.textContent = "Pedido: ¡Quiero escuchar la radio!";
            break;
        // ache
        case '選択された内容: いたいところが、ある':
            translatedAnswer.textContent = "Pedido: Tengo dolor.";
            break;
        case '選択された内容: かゆいところが、ある':
            translatedAnswer.textContent = "Pedido: Tengo picazón.";
            break;
        case '選択された内容: 気分がよくない':
            translatedAnswer.textContent = "Pedido: Me siento enfermo (Male) / Me siento enferma (Female)";
            break;
        // nurse
        case '選択された内容: からだを、診てほしい':
            translatedAnswer.textContent = "Pedido: Quiero que veas a un enfermero. (Male) / Quiero que veas a una enfermera. (Female)";
            break;
        case '選択された内容: くすりが、ほしい':
            translatedAnswer.textContent = "Pedido: ¡Quiero medicina!";
            break;
        case '選択された内容: その他（注射など）':
            translatedAnswer.textContent = "Pedido: Otros (inyecciones, etc.)";
            break;
        // default
        default:
            translatedAnswer.textContent = "Odpowiedź na pytanie 1 jest nieokreślona!";
    }
}


// For French
function onClickFrench() {
    let answer = document.querySelector(".answer");
    let translatedAnswer = document.querySelector(".translatedAnswer");

    switch (answer.textContent) {
        // food
        case '選択された内容: ごはんが、ほしい / 足りない':
            translatedAnswer.textContent = "Demande: Je veux de la nourriture!";
            break;
        case '選択された内容: おやつが、ほしい':
            translatedAnswer.textContent = "Demande: Je veux une collation!";
            break;
        case '選択された内容: ごはんが、食べにくい':
            translatedAnswer.textContent = "Demande: C'est difficile de manger de la nourriture!";
            break;
        // drink
        case '選択された内容: 水が、ほしい':
            translatedAnswer.textContent = "Demande: Je veux de l'eau!";
            break;
        case '選択された内容: お茶が、ほしい':
            translatedAnswer.textContent = "Demande: Je veux du thé!";
            break;
        case '選択された内容: コーヒーが、ほしい':
            translatedAnswer.textContent = "Demande: Je veux du café!";
            break;
        // toilet
        case '選択された内容: トイレに、行きたい':
            translatedAnswer.textContent = "Demande: Je veux aller aux toilettes!";
            break;
        case '選択された内容: トイレを、手伝ってほしい':
            translatedAnswer.textContent = "Demande: J'ai besoin d'aide pour aller aux toilettes!";
            break;
        case '選択された内容: トイレットペーパー切れ':
            translatedAnswer.textContent = "Demande: Nous n'avons plus de papier toilette!";
            break;
        // bath
        case '選択された内容: おふろに、入りたい':
            translatedAnswer.textContent = "Demande: Je veux prendre un bain!";
            break;
        case '選択された内容: おふろに、入りたくない':
            translatedAnswer.textContent = "Demande: Je ne veux pas prendre de bain!";
            break;
        case '選択された内容: からだを、ふいて':
            translatedAnswer.textContent = "Demande: S'il vous plaît, essuyez mon corps!";
            break;
        // clothes
        case '選択された内容: 服 / おむつを、きがえたい':
            translatedAnswer.textContent = "Demande: S'il vous plaît, changez mes vêtements/ma couche!";
            break;
        case '選択された内容: 服を、洗ってほしい':
            translatedAnswer.textContent = "Demande: S'il vous plaît, lavez mes vêtements!";
            break;
        case '選択された内容: ルーペ / めがねが、ほしい':
            translatedAnswer.textContent = "Demande: Je veux une loupe/des lunettes!";
            break;
        // bed
        case '選択された内容: ベッドから、起き上がりたい':
            translatedAnswer.textContent = "Demande: S'il te plaît, sors-moi du lit!";
            break;
        case '選択された内容: ベッドに、寝たい':
            translatedAnswer.textContent = "Demande: S'il vous plaît, laissez-moi m'allonger sur le lit!";
            break;
        case '選択された内容: ベッドの、傾きをかえたい':
            translatedAnswer.textContent = "Demande: Je voudrais changer l'inclinaison du lit!";
            break;
        // tv
        case '選択された内容: 広場で、テレビが見たい':
            translatedAnswer.textContent = "Demande: Je veux regarder la télé dans le hall!";
            break;
        case '選択された内容: 部屋で、テレビが見たい':
            translatedAnswer.textContent = "Demande: Je veux regarder la télé dans ma chambre!";
            break;
        case '選択された内容: ラジオを、ききたい':
            translatedAnswer.textContent = "Demande: Je veux écouter la radio!";
            break;
        // ache
        case '選択された内容: いたいところが、ある':
            translatedAnswer.textContent = "Demande: J'ai mal.";
            break;
        case '選択された内容: かゆいところが、ある':
            translatedAnswer.textContent = "Demande: J'ai une démangeaison.";
            break;
        case '選択された内容: 気分がよくない':
            translatedAnswer.textContent = "Demande: Je me sens malade.";
            break;
        // nurse
        case '選択された内容: からだを、診てほしい':
            translatedAnswer.textContent = "Demande: Je veux que tu voies une infirmière.";
            break;
        case '選択された内容: くすりが、ほしい':
            translatedAnswer.textContent = "Demande: Je veux des médicaments!";
            break;
        case '選択された内容: その他（注射など）':
            translatedAnswer.textContent = "Demande: Autres (injections, etc.)";
            break;
        // default
        default:
            translatedAnswer.textContent = "La réponse à la question 1 n'est pas définie!";
    }
}


// For Deutsch
function onClickDeutsch() {
    let answer = document.querySelector(".answer");
    let translatedAnswer = document.querySelector(".translatedAnswer");

    switch (answer.textContent) {
        // food
        case '選択された内容: ごはんが、ほしい / 足りない':
            translatedAnswer.textContent = "Anfrage: Ich will Essen!";
            break;
        case '選択された内容: おやつが、ほしい':
            translatedAnswer.textContent = "Anfrage: Ich möchte einen Snack!";
            break;
        case '選択された内容: ごはんが、食べにくい':
            translatedAnswer.textContent = "Anfrage: Es ist schwer, etwas zu essen!";
            break;
        // drink
        case '選択された内容: 水が、ほしい':
            translatedAnswer.textContent = "Anfrage: Ich will Wasser!";
            break;
        case '選択された内容: お茶が、ほしい':
            translatedAnswer.textContent = "Anfrage: Ich möchte etwas Tee!";
            break;
        case '選択された内容: コーヒーが、ほしい':
            translatedAnswer.textContent = "Anfrage: Ich will Kaffee!";
            break;
        // toilet
        case '選択された内容: トイレに、行きたい':
            translatedAnswer.textContent = "Anfrage: Ich möchte auf die Toilette gehen!";
            break;
        case '選択された内容: トイレを、手伝ってほしい':
            translatedAnswer.textContent = "Anfrage: Ich brauche Hilfe beim Toilettengang!";
            break;
        case '選択された内容: トイレットペーパー切れ':
            translatedAnswer.textContent = "Anfrage: Wir haben kein Toilettenpapier mehr!";
            break;
        // bath
        case '選択された内容: おふろに、入りたい':
            translatedAnswer.textContent = "Anfrage: Ich möchte ein Bad nehmen!";
            break;
        case '選択された内容: おふろに、入りたくない':
            translatedAnswer.textContent = "Anfrage: Ich will nicht baden!";
            break;
        case '選択された内容: からだを、ふいて':
            translatedAnswer.textContent = "Anfrage: Bitte wischen Sie meinen Körper ab!";
            break;
        // clothes
        case '選択された内容: 服 / おむつを、きがえたい':
            translatedAnswer.textContent = "Anfrage: Bitte wechsle meine Kleidung/Windel!";
            break;
        case '選択された内容: 服を、洗ってほしい':
            translatedAnswer.textContent = "Anfrage: Bitte wasche meine Kleidung!";
            break;
        case '選択された内容: ルーペ / めがねが、ほしい':
            translatedAnswer.textContent = "Anfrage: Ich möchte eine Lupe/Brille!";
            break;
        // bed
        case '選択された内容: ベッドから、起き上がりたい':
            translatedAnswer.textContent = "Anfrage: Bitte hol mich aus dem Bett!";
            break;
        case '選択された内容: ベッドに、寝たい':
            translatedAnswer.textContent = "Anfrage: Bitte lass mich auf dem Bett liegen!";
            break;
        case '選択された内容: ベッドの、傾きをかえたい':
            translatedAnswer.textContent = "Anfrage: Ich möchte die Neigung des Bettes ändern!";
            break;
        // tv
        case '選択された内容: 広場で、テレビが見たい':
            translatedAnswer.textContent = "Anfrage: Ich möchte im Flur fernsehen!";
            break;
        case '選択された内容: 部屋で、テレビが見たい':
            translatedAnswer.textContent = "Anfrage: Ich möchte in meinem Zimmer fernsehen!";
            break;
        case '選択された内容: ラジオを、ききたい':
            translatedAnswer.textContent = "Anfrage: Ich möchte Radio hören!";
            break;
        // ache
        case '選択された内容: いたいところが、ある':
            translatedAnswer.textContent = "Anfrage: Ich habe Schmerzen.";
            break;
        case '選択された内容: かゆいところが、ある':
            translatedAnswer.textContent = "Anfrage: Ich habe einen Juckreiz.";
            break;
        case '選択された内容: 気分がよくない':
            translatedAnswer.textContent = "Anfrage: Mir ist schlecht.";
            break;
        // nurse
        case '選択された内容: からだを、診てほしい':
            translatedAnswer.textContent = "Anfrage: Ich möchte, dass Sie eine Krankenschwester aufsuchen.";
            break;
        case '選択された内容: くすりが、ほしい':
            translatedAnswer.textContent = "Anfrage: Ich will Medizin!";
            break;
        case '選択された内容: その他（注射など）':
            translatedAnswer.textContent = "Anfrage: Andere (Injektionen usw.)";
            break;
        // default
        default:
            translatedAnswer.textContent = "Die Antwort auf Frage 1 ist undefiniert!";
    }
}


// For Italiano
function onClickItaliano() {
    let answer = document.querySelector(".answer");
    let translatedAnswer = document.querySelector(".translatedAnswer");

    switch (answer.textContent) {
        // food
        case '選択された内容: ごはんが、ほしい / 足りない':
            translatedAnswer.textContent = "Richiesta: Voglio cibo!";
            break;
        case '選択された内容: おやつが、ほしい':
            translatedAnswer.textContent = "Richiesta: Voglio uno spuntino!";
            break;
        case '選択された内容: ごはんが、食べにくい':
            translatedAnswer.textContent = "Richiesta: È difficile mangiare il cibo!";
            break;
        // drink
        case '選択された内容: 水が、ほしい':
            translatedAnswer.textContent = "Richiesta: Voglio dell'acqua!";
            break;
        case '選択された内容: お茶が、ほしい':
            translatedAnswer.textContent = "Richiesta: Voglio un po' di tè!";
            break;
        case '選択された内容: コーヒーが、ほしい':
            translatedAnswer.textContent = "Richiesta: Voglio caffè!";
            break;
        // toilet
        case '選択された内容: トイレに、行きたい':
            translatedAnswer.textContent = "Richiesta: Voglio andare al bagno!";
            break;
        case '選択された内容: トイレを、手伝ってほしい':
            translatedAnswer.textContent = "Richiesta: Ho bisogno di aiuto per usare il bagno!";
            break;
        case '選択された内容: トイレットペーパー切れ':
            translatedAnswer.textContent = "Richiesta: Abbiamo finito la carta igienica!";
            break;
        // bath
        case '選択された内容: おふろに、入りたい':
            translatedAnswer.textContent = "Richiesta: Voglio fare un bagno!";
            break;
        case '選択された内容: おふろに、入りたくない':
            translatedAnswer.textContent = "Richiesta: Non voglio fare il bagno!";
            break;
        case '選択された内容: からだを、ふいて':
            translatedAnswer.textContent = "Richiesta: Per favore, pulisci il mio corpo!";
            break;
        // clothes
        case '選択された内容: 服 / おむつを、きがえたい':
            translatedAnswer.textContent = "Richiesta: Per favore, cambiami i vestiti/pannolini!";
            break;
        case '選択された内容: 服を、洗ってほしい':
            translatedAnswer.textContent = "Richiesta: Per favore, lavami i vestiti!";
            break;
        case '選択された内容: ルーペ / めがねが、ほしい':
            translatedAnswer.textContent = "Richiesta: Voglio lenti/occhiali!";
            break;
        // bed
        case '選択された内容: ベッドから、起き上がりたい':
            translatedAnswer.textContent = "Richiesta: Per favore, fammi alzare dal letto!";
            break;
        case '選択された内容: ベッドに、寝たい':
            translatedAnswer.textContent = "Richiesta: Per favore, lasciami sdraiare sul letto!";
            break;
        case '選択された内容: ベッドの、傾きをかえたい':
            translatedAnswer.textContent = "Richiesta: Vorrei cambiare l'inclinazione del letto!";
            break;
        // tv
        case '選択された内容: 広場で、テレビが見たい':
            translatedAnswer.textContent = "Richiesta: Voglio guardare la TV in corridoio!";
            break;
        case '選択された内容: 部屋で、テレビが見たい':
            translatedAnswer.textContent = "Richiesta: Voglio guardare la TV in camera mia!";
            break;
        case '選択された内容: ラジオを、ききたい':
            translatedAnswer.textContent = "Richiesta: Voglio ascoltare la radio!";
            break;
        // ache
        case '選択された内容: いたいところが、ある':
            translatedAnswer.textContent = "Richiesta: Ho dolore.";
            break;
        case '選択された内容: かゆいところが、ある':
            translatedAnswer.textContent = "Richiesta: Ho prurito.";
            break;
        case '選択された内容: 気分がよくない':
            translatedAnswer.textContent = "Richiesta: Mi sento male.";
            break;
        // nurse
        case '選択された内容: からだを、診てほしい':
            translatedAnswer.textContent = "Richiesta: Voglio che tu veda un'infermiera.";
            break;
        case '選択された内容: くすりが、ほしい':
            translatedAnswer.textContent = "Richiesta: Voglio la medicina!";
            break;
        case '選択された内容: その他（注射など）':
            translatedAnswer.textContent = "Richiesta: Altri (iniezioni, ecc.)";
            break;
        // default
        default:
            translatedAnswer.textContent = "La risposta alla domanda 1 non è definita!";
    }
}