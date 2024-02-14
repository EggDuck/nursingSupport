class FormHandler {
    constructor() {
      this.box2 = document.querySelector(".box2");
      this.box3 = document.querySelector(".box3");
      this.msg = document.querySelector(".msg");
      this.user = document.getElementById("user");
      this.sender = document.getElementById("sender");
      this.request = document.getElementById("request");
      this.level = document.getElementById("level");
      this.emergencyLevel = document.getElementById("emergencyLevel");
    }
  
    resetBoxes() {
      this.box2.classList.remove("box2");
      this.box3.classList.remove("box3");
    }
  
    updateMessage(elementContent) {
      this.msg.textContent = elementContent.textContent;
    }
  
    updateFormValues() {
      this.sender.value = this.user.textContent;
      this.request.value = this.msg.textContent;
      this.level.value = this.emergencyLevel.value;
    }
}
  
function onClickElement1() {
    let formHandler = new FormHandler();
    formHandler.resetBoxes();
  
    let elementContent = document.getElementById(`element1`);
    formHandler.updateMessage(elementContent);
  
    formHandler.updateFormValues();
}
function onClickElement2() {
    let formHandler = new FormHandler();
    formHandler.resetBoxes();
  
    let elementContent = document.getElementById(`element2`);
    formHandler.updateMessage(elementContent);
  
    formHandler.updateFormValues();
}
function onClickElement3() {
    let formHandler = new FormHandler();
    formHandler.resetBoxes();
  
    let elementContent = document.getElementById(`element3`);
    formHandler.updateMessage(elementContent);
  
    formHandler.updateFormValues();
}
 