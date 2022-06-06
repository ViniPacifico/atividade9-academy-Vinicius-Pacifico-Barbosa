describe("App/Alert Dialogs/OK CANCEL DIALOG WITH MESSAGE;", () => {

  it("verificar se o titulo do app é API Demos", async () => {
    const textoTitulo = await $("android.widget.TextView").getText();
    expect(textoTitulo).toBe("API Demos");
  });

  it("Verificar se o botão de APP funciona", async () => {
    await $("//android.widget.TextView[@content-desc='App']").click();
  });

  it("Verificar se o botão de Alert Dialogs funciona", async () => {
    await $("//android.widget.TextView[@content-desc='Alert Dialogs']").click();
  });

  it("Verificar o botão de OK CANCEL DIALOG WITH MESSAGE", async () => {
    await $("//android.widget.Button[@content-desc='OK Cancel dialog with a message']").click();
    //const visibilidadeBotao = await $("//android.widget.Button[content-desc='OK Cancel dialog with a message'").isDisplayed();
    //expect (visibilidadeBotao).toBe(true)
  });

  it("Verificar funcionalidade do botão OK", async () => {
    await $("id=android:id/button1").click();
  });

  it("Verificar o botão de OK CANCEL DIALOG WITH MESSAGE", async () => {
    await $("//android.widget.Button[@content-desc='OK Cancel dialog with a message']").click();
  });

  it("Verificar funcionalidade do botão Cancelar ", async () => {
    await $("id=android:id/button2").click();
  });

  it("Verificar o botão List Dialog", async () => {
    await $("id=io.appium.android.apis:id/select_button").click();
  });

});