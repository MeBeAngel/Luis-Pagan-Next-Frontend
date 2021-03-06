import mailchimp from '@mailchimp/mailchimp_marketing';



export default async function handler (req, res) {
  mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: process.env.MAILCHIMP_API_SERVER // e.g. us1
  });
  const { email, firstName, lastName, phone, question } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }
  if (!firstName) {
    return res.status(400).json({ error: 'First name is required' });
  }

  if (!lastName) {
    return res.status(400).json({ error: 'Last name is required' });
  }

  if (!phone) {
    return res.status(400).json({ error: 'phone is required' });
  }

  if (!question) {
    return res.status(400).json({ error: 'Question is required' });
  }

  try {
    await mailchimp.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID, {
      email_address: email,
      status: 'subscribed',
      merge_fields: {
        FNAME: firstName,
        LNAME: lastName,
        PHONE: phone,
        QUESTION: question

    },
    });

    return res.status(201).json({ error: '' });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
    
  }
};