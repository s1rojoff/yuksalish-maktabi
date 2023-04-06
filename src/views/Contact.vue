<script setup lang="ts">
import BaseBtn from "@/components/BaseButton/index.vue";
import { ref } from "vue";
let name = ref<string>("");
let sname = ref<string>("");
let phone = ref<string>("");
let age = ref<string>("");
const tg: any = {
  token: "6143392112:AAF4zejEw01cq8zqiA-VQWCFi6up8JOfQKE",
  chat_id: "-1001804069773",
};
/**
 * By calling this function you can send message to a specific user()
 * @param {String} the text to send
 *
 */

function sendMessage(param: any) {
  const url = `https://api.telegram.org/bot${tg.token}/sendMessage`; // The url to request

  const obj = {
    chat_id: tg.chat_id, // Telegram chat id
    text: param, // The text to send
  };

  const xht = new XMLHttpRequest();
  xht.open("POST", url, true);
  xht.setRequestHeader("Content-type", "application/json; charset=UTF-8");
  xht.send(JSON.stringify(obj));
}
function sendData(): any {
  if (name.value && sname.value && phone.value && age.value) {
    sendMessage(
      `Ismi: ${name.value}, \nFamilya: ${sname.value}, \nTelefon nomer: ${phone.value}, \nYosh: ${age.value}`
    );
    name.value = "";
    sname.value = "";
    phone.value = "";
    age.value = "";
  }
}
</script>
<template>
  <div id="contact" class="px-24 pt-10 bg-slate-50">
    <p class="text-3xl pb-10 text-black font-semibold text-center">
      Biz bilan bog'lanish
    </p>
    <div class="w-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1996.6035703507787!2d69.21581054552442!3d41.307737466187774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b1f8365179b%3A0xa2d2db9aa56870c0!2sYuksalish%20maktabi!5e0!3m2!1suz!2sus!4v1680693112352!5m2!1suz!2sus"
        style="border: 0"
        class="w-full h-96"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    <div class="mt-5 pb-10 w-full">
      <p class="text-center text-lg font-medium">
        Anketani to'ldiring, biz imkon qadar tezroq siz bilan bog'lanamiz
      </p>
      <div class="flex justify-center mt-5">
        <div class="w-1/2 bg-slate-200 py-10 px-5 rounded-xl">
          <div class="flex justify-between pb-2">
            <div class="w-1/2 pr-3">
              <label for="fname">O'quvchining ismi</label>
              <input
                autocomplete="off"
                type="text"
                placeholder="Ism"
                id="fname"
                class="w-full mt-1 border h-10 rounded-md px-2 outline-none"
                v-model="name"
              />
            </div>
            <div class="w-1/2 pl-3">
              <label for="sname">O'quvchining Familyasi</label>
              <input
                autocomplete="off"
                type="text"
                placeholder="Familya"
                id="sname"
                class="w-full mt-1 border h-10 rounded-md px-2 outline-none"
                v-model="sname"
              />
            </div>
          </div>
          <div class="flex justify-between mt-4">
            <div class="w-1/2 pr-3">
              <label for="phone">Telefon raqam</label>
              <input
                autocomplete="off"
                type="text"
                placeholder="Telefon raqam"
                id="phone"
                class="w-full mt-1 border h-10 rounded-md px-2 outline-none"
                v-model="phone"
              />
            </div>
            <div class="w-1/2 pl-3">
              <label for="age">O'quvchining yoshi</label>
              <input
                autocomplete="off"
                type="number"
                placeholder="Yosh"
                id="age"
                class="w-full mt-1 border h-10 rounded-md px-2 outline-none"
                v-model="age"
              />
            </div>
          </div>
          <div class="flex justify-center mt-2">
            <BaseBtn
              @click="sendData"
              class="tracking-widest mt-2"
              :class="[
                (name, sname, phone, age)
                  ? 'cursor-pointer'
                  : 'cursor-not-allowed',
              ]"
              text="Jo'natish"
              size="md"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
