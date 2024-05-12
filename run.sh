#!/bin/bash

# Start a new tmux session and detach from it
tmux new-session -d -s myProjects

# Split the window into four panes
tmux split-window -h
tmux split-window -v
tmux select-pane -t 0
tmux split-window -v

# Navigate to the project directories and run the projects in each pane
tmux send-keys -t 0 "cd $(pwd)/backend && npm run dev" C-m
tmux send-keys -t 1 "cd $(pwd)/frontend && npm run start" C-m
tmux send-keys -t 2 "cd $(pwd)/fin-agent && source venv/bin/activate && python app.py" C-m
tmux send-keys -t 3 "cd $(pwd)/dashboard && npm run dev" C-m

# Optionally, resize panes to better fit your screen
tmux resize-pane -D 10
tmux resize-pane -R -t 1 15

# Attach to the session
tmux attach-session -t myProjects
