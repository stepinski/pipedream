//it's nodejs pipedream task
//assuming we have in items results of github issues search
const axios = require("axios");
const responses = []
items= steps.github.$return_value.items
gitscrumurl="https://api.gitscrum.com/tasks/?api_id={your_gitscrum_apiid}&project_key={your_gitscrum_keyid}}"
for ( const item of items) {
  const resp = await axios({
    method: "POST",
    url: gitscrumurl,
    data: {
      title: "[issue] "+item.title,
      description: item.body +"\n"+item.html_url
    }
  });
  responses.push(resp.data);
}
return responses;