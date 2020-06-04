import {Task} from '../../business-logic/model/tasks/task';

export interface ExperimentGraph {
  data?: {};
  layout?: Object;
  iter?: number;
  metric?: string;
  task?: Task['id'];
  timestamp?: number;
  type?: string;  // TODO: write options in constant
  variant?: string;
  worker?: string;
  config?: Object;
}
