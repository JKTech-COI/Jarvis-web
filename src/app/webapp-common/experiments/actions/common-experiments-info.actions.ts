import {Action} from '@ngrx/store';
import {Task} from '../../../business-logic/model/tasks/task';
import {IExperimentInfo, ISelectedExperiment} from '../../../features/experiments/shared/experiment-info.model';
import {Model} from '../../../business-logic/model/models/model';
import {ITableExperiment} from '../shared/common-experiment-model.model';
export const EXPERIMENTS_INFO_PREFIX = 'EXPERIMENTS_INFO_';
export const GET_EXPERIMENT_INFO             = EXPERIMENTS_INFO_PREFIX + 'GET_EXPERIMENT_INFO';
export const AUTO_REFRESH_EXPERIMENT_INFO    = EXPERIMENTS_INFO_PREFIX + 'AUTO_REFRESH_EXPERIMENT_INFO';
export const SET_EXPERIMENT                  = EXPERIMENTS_INFO_PREFIX + 'SET_EXPERIMENT';
export const EXPERIMENT_UPDATED_SUCCESSFULLY = EXPERIMENTS_INFO_PREFIX + 'EXPERIMENT_UPDATED_SUCCESSFULLY';
export const SET_EXPERIMENT_INFO_DATA        = EXPERIMENTS_INFO_PREFIX + 'SET_EXPERIMENT_INFO_DATA';
export const RESET_EXPERIMENT_INFO           = EXPERIMENTS_INFO_PREFIX + 'RESET_EXPERIMENT_INFO';
export const UPDATE_EXPERIMENT_INFO_DATA        = EXPERIMENTS_INFO_PREFIX + 'UPDATE_EXPERIMENT_INFO_DATA';
export const MODEL_SELECTED                  = EXPERIMENTS_INFO_PREFIX + 'MODEL_SELECTED';


export class GetExperimentInfo implements Action {
  readonly type = GET_EXPERIMENT_INFO;

  constructor(public payload: Task['id']) {
  }
}

export class ResetExperimentInfo implements Action {
  readonly type = RESET_EXPERIMENT_INFO;
}
export class AutoRefreshExperimentInfo implements Action {
  readonly type = AUTO_REFRESH_EXPERIMENT_INFO;

  constructor(public payload: Task['id']) {
  }
}

export class SetExperiment implements Action {
  readonly type = SET_EXPERIMENT;

  constructor(public payload: ISelectedExperiment) {
  }
}

export class ExperimentUpdatedSuccessfully implements Action {
  readonly type = EXPERIMENT_UPDATED_SUCCESSFULLY;
}

export class SetExperimentInfoData implements Action {
  readonly type = SET_EXPERIMENT_INFO_DATA;

  constructor(public payload: IExperimentInfo) {
  }
}

export class ModelSelected implements Action {
  readonly type = MODEL_SELECTED;
  public payload: {
    model: Model;
    fieldsToPopulate: { labelEnum: boolean; networkDesign: boolean; }
  };

  constructor(payload: {
    model: Model;
    fieldsToPopulate: { labelEnum: boolean; networkDesign: boolean; }
  }) {
    this.payload = payload;
  }
}

export class UpdateExperimentInfoData implements Action {
  readonly type = UPDATE_EXPERIMENT_INFO_DATA;

  constructor(public payload: { id: ITableExperiment['id'], changes: Partial<ITableExperiment> }) {
  }
}
