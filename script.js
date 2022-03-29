  // Personal Information
  const github =  "https://github.com/gaspetcan";
  const linkedin = "https://www.linkedin.com/in/yagiz-aydin/"
  const medium = "https://medium.com/@yagiz-aydin"

  // Experience Year Calculator
  const date = new Date();
  const now = date.getFullYear();
  const firstFieldExperience = 2019
  document.getElementById("experience").innerHTML = now - firstFieldExperience

  // Github Profile Image 
  const githubUserImageId = "47862703?v=4"
  document.getElementById("profile").src = `https://avatars.githubusercontent.com/u/${githubUserImageId}`
  
  // Dark Mode Switch
  const darkMode = [
    {name: 'default', value: "#f8f9fa"}, 
    {name: 'primary', value: "#e55e0ac0"},
    {name: 'background', value: "#343a40"}
  ]

  const whiteMode = [
    {name: 'default', value: "#343a40"}, 
    {name: 'primary', value: "#015dde"},
    {name: 'background', value: "#f8f9fa"}
  ]
  
  const changeTheme = () => {
    let mode = whiteMode;
    const dark = document.getElementById('colorMode').checked === true
    if(dark){
      mode = darkMode
    }
    mode.forEach(({name, value}) => document.documentElement.style.setProperty(`--${name}`, value))
  }

  const { Configuration, OpenAIApi } = require("openai");

  const configuration = new Configuration({
    apiKey: "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",
  });

  const openai = new OpenAIApi(configuration);

  const openAIRequest = async () => {
    const ask = document.getElementById("text")
    const response = await openai.createCompletion("text-davinci-002", {
      prompt: ask,
      temperature: 0.7,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    document.getElementById("answer") =  response;
    console.log(response)
  }