FROM oven/bun:debian

# Configura bun
ENV PATH="~/.bun/bin:${PATH}"
RUN ln -s /usr/local/bin/bun /usr/local/bin/node

# Atualiza o sistema
RUN apt-get update

# Instala o git
RUN apt-get install -y git

# Instala o nvim
RUN apt-get install -y neovim vim
