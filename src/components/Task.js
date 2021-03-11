import React from 'react';

const Task = ({
  task: { id, title, state },
  onArchiveTask,
  onPinTask,
}) => (
  <div className={`list-item ${state}`}>
    <label className="checkbox">
      <input
        type="checkbox"
        defaultChecked={state === 'TASK_ARCHIVED'}
        disabled
        name="checked"
      />
      <span className="checkbox-custom" onClick={() => onArchiveTask(id)} />
    </label>
    <div className="title">
      <input type="text" value={title} placeholder="Input title" readOnly />
    </div>
    <div className="actions" onClick={(event) => event.stopPropagation()}>
      {state !== 'TASK_ARCHIVED' && (
        <a onClick={() => onPinTask(id)}>
          <span className="icon-star" />
        </a>
      )}
    </div>
  </div>
);

export default Task;
