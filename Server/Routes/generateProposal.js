import express from 'express';
import { Configuration, OpenAIApi } from 'openai';

const router = express.Router();

const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(config);

router.post('/', async (req, res) => {
    const { jobDescription, userInfo } = req.body;

    const prompt = `Write a persuasive Upwork proposal for this job post:\n\n${jobDescription}\n\nFreelancer Info:\n${userInfo}\n\nStructure:\n1. Greeting\n2. Problem understanding\n3. Why me\n4. CTA\n\nTone: friendly expert. Max 250 words.`;

    try {
        const response = await openai.createChatCompletion({
            model: 'gpt-4',
            messages: [{ role: 'user', content: prompt }],
            temperature: 0.7,
        });

        res.json({ proposal: response.data.choices[0].message.content });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to generate proposal.' });
    }
});

export default router;

