const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

exports.generateQuestion = async (req, res) => {
  try {
    const { subject, topic } = req.body;

    const prompt = `Generate a multiple-choice question for ${subject}, topic: ${topic}. 
    - 4 options
    - Only 1 correct answer
    - Provide explanation after the answer`;

    const response = await openai.createChatCompletion({
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }],
    });

    res.json({ question: response.data.choices[0].message.content });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to generate question" });
  }
};
