import { fetchJoke } from "../../src/joke_api";
import axios from 'axios';

jest.mock('axios');

describe('Chuck Norris Jokes', () => {
    test('Can fetch joke', async () => {
        const jokeObject = {
            categories: [],
            created_at: '2020-01-05 13:42:29.569033',
            icon_url: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
            id: 'aD2ozH7uRzO0XmzY_6aAYg',
            updated_at: '2020-01-05 13:42:29.569033',
            url: 'https://api.chucknorris.io/jokes/aD2ozH7uRzO0XmzY_6aAYg',
            value: 'Chuck Norris roundhouse kicked a man in a wheelchair in the ground people dug that fossil up it is now a handicap parking sign but really it is a warning that Chuck is coming'
          }

          const res = {
            data: jokeObject
          }

          axios.get.mockResolvedValue(res);

          await expect(fetchJoke()).resolves.toBe(jokeObject);
    })

    test('Chuck Norris Error', async () => {
      axios.get.mockRejectedValueOnce();
      await expect(fetchJoke()).resolves.toBe(undefined);
    })
})