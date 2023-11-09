import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponentialStrength',
  // standalone: true
})
export class ExponentialStrengthPipe implements PipeTransform {

  transform(value: number, power: number): unknown {
    console.log("value:"+value);
    console.log("power:"+power);
    return Math.pow(value, isNaN(power) ? 1 : power);
  }

}
