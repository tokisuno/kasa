import {Command} from '@oclif/core'
import axios from 'axios';
import 'dotenv/config';

export default class Weather extends Command {
  static override description = 'Gets the current weather'
  static override examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  public async run(): Promise<void> {
    axios.get(process.env.WEATHER_API as string).then((response) => {
      const { temperature_2m, time } = response.data.current;
      console.log(`The current temperature (as of ${time}) is: ${temperature_2m}C!`);
    })
  }
}
