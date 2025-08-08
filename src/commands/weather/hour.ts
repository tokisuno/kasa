import {Args, Command} from '@oclif/core';
import axios from 'axios';
import 'dotenv/config';

export default class Weather extends Command {
  static override args = {
    hour: Args.integer({
      required: true
    }),
  }
  static override description = `Gets today's weather at {HOUR}:00 (military time)`
  static override examples = [
    '<%= config.bin %> <%= command.id %> 17 <--- outputs temperature from today at 17:00',
  ]

  public async run(): Promise<void> {
    const { args } = await this.parse(Weather);

    axios.get(process.env.WEATHER_API as string).then((response) => {
      const { temperature_2m } = response.data.hourly;
      console.log(`Temperature (as of ${args.hour}:00) is: ${temperature_2m[args.hour + 1]}C!`);
    })
  }
}
