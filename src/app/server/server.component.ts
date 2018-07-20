import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})

export class ServerComponent {
    name = "server";
    status: string;
    clientCount: number;
    clients: { id: number, name: string }[];

    showClientStatus(val) {
        this.status = 'server: ' + val.name + '(online)';
    }

    generateClients() {
        this.clients = [];
        for (let i = 0; i < this.clientCount; i++) {
            this.clients.push({
                id: i,
                name: 'client' + i
            });
        }
    }
}