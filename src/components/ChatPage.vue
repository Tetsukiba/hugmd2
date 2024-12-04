<template>
<h1> <button class="btn" type="button" style="background-color: gray; margin-left:65%" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
<font-awesome-icon icon="fa-solid fa-bars" /></button></h1>
<div class="offcanvas offcanvas-end" tabindex="-1" data-bs-backdrop="false" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Menu</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body" ><h1 style="text-align: left; display: inline-block; cursor: pointer;">    
    <router-link to="/" class="nav-link"><font-awesome-icon icon="fa-solid fa-house-chimney" /> Home<br><br></router-link>
    <router-link to="/chat" class="nav-link"><font-awesome-icon icon="fa-solid fa-robot" /> Chat <br><br></router-link>
    <router-link to="/settings" class="nav-link"><font-awesome-icon icon="fa-solid fa-gear" /> Settings</router-link></h1>
  </div>
</div>
<h1 class="card-title">How do you feel?</h1>
<div class="chat-app">
    <div class="chat-display">
      <div
        v-for="(message, index) in messages"
        :key="index"
        :class="['message', message.type]">
        <p>{{ message.text }}</p>
      </div>
    </div>
</div>

<div class="card">
        <div class="card-body">
          <div class="input-group">
            <textarea v-model="newMessage" @keyup.enter="sendMessage" placeholder="Type a message..." class="form-control" id="input"></textarea>
            <button @click="sendMessage" class="btn" style="color: white; background-color: black; border-radius: 50px; height: 5%; margin-top: 5%;"><font-awesome-icon icon="fa-solid fa-arrow-up" /></button>
          </div>
        </div>
      </div>
</template>

<script>
import OpenAI from "openai"

export default {
  data() {
    return {
      newMessage: "", // Stores the current input
      messages: [], // Stores all messages
      prompt: ""
    };
  },

  mounted(){
    this.prompt = this.$route.query?.message;
    if(this.prompt != ""){
      if(this.prompt == "prompt1"){
        this.newMessage = "Lately I've been feeling tired with body aches"
        this.sendMessage()
      }
      if(this.prompt == "prompt2"){
        this.newMessage = "I'm feeling tense or irritable"
        this.sendMessage()
      }
      if(this.prompt == "prompt3"){
        this.newMessage = "Frequently I experience abdominal pain"
        this.sendMessage()
      }
    }
  },
  methods: {
  async sendMessage() {
      if (this.newMessage.trim()) {
        // Add user's message
        this.messages.push({ text: this.newMessage, type: "sent" });



        const openai = new OpenAI({
          project: 'proj_P3rGSOIMnh2lokVsihqzU8CG',
          organization: 'org-G0W2QBbAVpgKBk9kLPPu98uE',
          dangerouslyAllowBrowser: true,
          apiKey: '{OPEN_AI_KEY}',        
      });

        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                { role: "system", content: `You are a health anxiety chatbot that is serving a user. 
                Give a reasonable assessment of the following query, and elaborate upon your reasoning without giving the prompt back. 
                Context: The user may be asking senstive health related questions, so remain mindful of tone.
                The user wants to be addressed conversationally, so use the pronoun "you".
                Remind the user of strategies to rationalize and reduce feelings of anxiety.
                Remind the user that you cannot diagnose as a chatbot if asked anything pertaining diagnosis.` },
                {
                    role: "user",
                    content: this.newMessage,
                },
            ],
        });
        this.messages.push({
                    text: completion.choices[0].message.content,
                    type: "received",
                  });
        
                  this.newMessage = ''

      }
    },
  },
};
</script>

<style scoped>
textarea{
  background-color: rgb(148, 148, 148);
  border-color:  rgb(148, 148, 148);
  height: 7rem;
  resize:none;
  margin-right: 5%;
}
.card{
  justify-content: center;
  margin-top: 1rem;
  width: 75%;
  height: 10rem;
  left: 10%;
  border-radius: 50px;
  border-color: rgba(2, 0, 0, 0.425);
  border-width: 5px;
  background-color: rgb(148, 148, 148)
}
.card-title{
  margin-right: 10%;
}

.chat-app {
  width: 75%;
  height: 30rem;
  max-height: 75%;
  margin-left: 10%;
  min-height: 10%;
  border: 1px solid #f9f9f9;
  border-radius: 10px;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
}

.chat-display {
  flex: 1;
  padding: 10px;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: #f9f9f9;
}

.message {
  margin: 5px 0;
  padding: 10px;
  border-radius: 5px;
  max-width: 70%;
}

.message.sent {
  margin-top: 1%;
  color: white;
  background-color: #4e80eb;
  margin-left: 50%;
  align-self: flex-end;
}

.message.received {
  margin-top: 1%;
  color: white;
  background-color: #b1b1b1;
  margin-right: 50%;
  align-self: flex-start;
}

</style>
